import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { motion } from 'framer-motion';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-destructive mb-4">403</h1>
        <p className="text-2xl text-foreground mb-6">Unauthorized Access</p>
        <p className="text-muted-foreground mb-8">
          You don't have permission to access this page.
        </p>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate('/')}
        >
          Go to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default Unauthorized;
