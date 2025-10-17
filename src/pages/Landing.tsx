import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  QrcodeOutlined, 
  SyncOutlined, 
  EnvironmentOutlined, 
  BarChartOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined
} from '@ant-design/icons';
import { Button, Card, Form, Input } from 'antd';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <QrcodeOutlined className="text-4xl" />,
      title: "QR Code Billing",
      description: "Instant digital payments with secure QR codes"
    },
    {
      icon: <SyncOutlined className="text-4xl" />,
      title: "Real-time Sync",
      description: "Automatic arrear synchronization across all ULBs"
    },
    {
      icon: <EnvironmentOutlined className="text-4xl" />,
      title: "Property Mapping",
      description: "Advanced GIS-based property tracking system"
    },
    {
      icon: <BarChartOutlined className="text-4xl" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and performance metrics"
    }
  ];

  const partners = [
    { name: "QRPE", logo: "Q" },
    { name: "CGG", logo: "C" },
    { name: "ICICI", logo: "I" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient-shift bg-200%" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Telangana CDMA
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl mb-4 text-foreground/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Smart Governance Portal
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Empowering Telangana through Smart Digital Governance
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                type="primary"
                size="large"
                onClick={() => navigate('/login')}
                className="h-14 px-12 text-lg font-semibold bg-gradient-to-r from-primary to-secondary border-0 hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Login to Dashboard
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-10 text-primary/20 text-6xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <QrcodeOutlined />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-secondary/20 text-6xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <BarChartOutlined />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="h-full bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                  hoverable
                >
                  <div className="text-center">
                    <div className="text-primary mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Partners
          </motion.h2>
          <div className="flex justify-center gap-16 flex-wrap">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-white shadow-lg hover:shadow-primary/50 transition-all cursor-pointer"
              >
                {partner.logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <EnvironmentOutlined className="text-primary text-xl" />
                    <p>CDMA Headquarters, Hyderabad, Telangana</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MailOutlined className="text-primary text-xl" />
                    <p>support@cdma.telangana.gov.in</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneOutlined className="text-primary text-xl" />
                    <p>+91 40 1234 5678</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <GlobalOutlined className="text-primary text-xl" />
                    <p>www.cdma.telangana.gov.in</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
                <Form layout="vertical">
                  <Form.Item label="Name">
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input size="large" type="email" />
                  </Form.Item>
                  <Form.Item label="Message">
                    <Input.TextArea rows={4} />
                  </Form.Item>
                  <Button type="primary" size="large" block>
                    Send Message
                  </Button>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/80 border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © 2025 Telangana CDMA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: 'hsl(214, 100%, 60%)' }}
                className="text-muted-foreground text-2xl"
              >
                <LinkedinOutlined />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: 'hsl(214, 100%, 60%)' }}
                className="text-muted-foreground text-2xl"
              >
                <TwitterOutlined />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: 'hsl(214, 100%, 60%)' }}
                className="text-muted-foreground text-2xl"
              >
                <FacebookOutlined />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
