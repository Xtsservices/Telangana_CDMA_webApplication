import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Button, Input, Form, Select, message } from 'antd';
import { MobileOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '@/store/authSlice';
import type { UserRole } from '@/store/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState<'mobile' | 'otp'>('mobile');
  const [mobile, setMobile] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('ULB');

  const roles: { value: UserRole; label: string }[] = [
    { value: 'ULB', label: 'ULB Officer' },
    { value: 'RI', label: 'Revenue Inspector' },
    { value: 'Commissioner', label: 'Commissioner' },
    { value: 'CDMA', label: 'CDMA HQ' },
    { value: 'CGG', label: 'CGG Analyst' },
    { value: 'Admin', label: 'Admin' },
  ];

  const handleMobileSubmit = (values: { mobile: string; role: UserRole }) => {
    const { mobile: mobileNum, role } = values;
    
    if (!mobileNum.match(/^9\d{9}$/)) {
      message.error('Mobile number must start with 9 and be 10 digits');
      return;
    }

    setMobile(mobileNum);
    setSelectedRole(role);
    setStep('otp');
    message.success('OTP sent successfully!');
  };

  const handleOTPSubmit = (values: { otp: string }) => {
    if (values.otp === '123456') {
      dispatch(login({ mobile, role: selectedRole }));
      message.success('Login successful!');
      navigate(`/dashboard/${selectedRole.toLowerCase()}`);
    } else {
      message.error('Invalid OTP. Please use 123456');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient-shift bg-200%" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <motion.h1 
              className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              CDMA Portal Login
            </motion.h1>
            <p className="text-muted-foreground">
              {step === 'mobile' ? 'Enter your mobile number' : 'Enter OTP sent to your mobile'}
            </p>
          </div>

          {step === 'mobile' ? (
            <Form
              layout="vertical"
              onFinish={handleMobileSubmit}
              initialValues={{ role: 'ULB' }}
            >
              <Form.Item
                label="Mobile Number"
                name="mobile"
                rules={[
                  { required: true, message: 'Please enter your mobile number' },
                  { pattern: /^9\d{9}$/, message: 'Enter valid 10-digit number starting with 9' }
                ]}
              >
                <Input
                  prefix={<MobileOutlined className="text-primary" />}
                  placeholder="9XXXXXXXXX"
                  size="large"
                  maxLength={10}
                />
              </Form.Item>

              <Form.Item
                label="Select Role"
                name="role"
                rules={[{ required: true, message: 'Please select your role' }]}
              >
                <Select size="large" options={roles} />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  className="bg-gradient-to-r from-primary to-secondary border-0 hover:shadow-lg hover:shadow-primary/50"
                >
                  Send OTP
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Form layout="vertical" onFinish={handleOTPSubmit}>
              <Form.Item
                label="Enter OTP"
                name="otp"
                rules={[
                  { required: true, message: 'Please enter OTP' },
                  { len: 6, message: 'OTP must be 6 digits' }
                ]}
              >
                <Input
                  prefix={<LockOutlined className="text-primary" />}
                  placeholder="Enter 6-digit OTP"
                  size="large"
                  maxLength={6}
                />
              </Form.Item>

              <p className="text-sm text-muted-foreground mb-4">
                OTP sent to: +91 {mobile}
              </p>

              <div className="flex gap-3">
                <Button
                  size="large"
                  onClick={() => setStep('mobile')}
                  className="flex-1"
                >
                  Change Number
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="flex-1 bg-gradient-to-r from-primary to-secondary border-0 hover:shadow-lg hover:shadow-primary/50"
                >
                  Verify & Login
                </Button>
              </div>

              <Button
                type="link"
                onClick={() => message.info('OTP resent successfully!')}
                className="w-full mt-4"
              >
                Resend OTP
              </Button>
            </Form>
          )}

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>For demo: Use OTP <strong className="text-primary">123456</strong></p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button
            type="link"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-primary"
          >
            ← Back to Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
