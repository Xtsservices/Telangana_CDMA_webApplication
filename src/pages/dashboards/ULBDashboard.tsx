import { Card, Row, Col, Statistic, Table, Button } from 'antd';
import { 
  DollarOutlined, 
  CheckCircleOutlined, 
  ClockCircleOutlined, 
  HomeOutlined 
} from '@ant-design/icons';
import { Line, Bar } from 'recharts';
import { LineChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ulbArrears, propertyMapping } from '@/data/sampleData';
import { motion } from 'framer-motion';

const ULBDashboard = () => {
  const revenueData = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 55000 },
    { month: 'Jun', revenue: 67000 },
  ];

  const arrearsColumns = [
    { title: 'Property ID', dataIndex: 'propertyId', key: 'propertyId' },
    { title: 'Owner', dataIndex: 'owner', key: 'owner' },
    { title: 'Amount (₹)', dataIndex: 'amount', key: 'amount' },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => (
        <span className={status === 'Paid' ? 'text-green-500' : 'text-yellow-500'}>
          {status}
        </span>
      )
    },
  ];

  return (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <Statistic
                title="Total Revenue"
                value={328000}
                prefix="₹"
                valueStyle={{ color: 'hsl(214, 100%, 60%)' }}
                suffix={<DollarOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <Statistic
                title="Paid Arrears"
                value={5700}
                prefix="₹"
                valueStyle={{ color: '#10b981' }}
                suffix={<CheckCircleOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/20">
              <Statistic
                title="Pending Arrears"
                value={6700}
                prefix="₹"
                valueStyle={{ color: '#eab308' }}
                suffix={<ClockCircleOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <Statistic
                title="Total Properties"
                value={1247}
                valueStyle={{ color: 'hsl(180, 80%, 55%)' }}
                suffix={<HomeOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="Revenue Trend" className="h-full">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 25%)" />
                  <XAxis dataKey="month" stroke="hsl(215, 20%, 65%)" />
                  <YAxis stroke="hsl(215, 20%, 65%)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(222, 47%, 15%)', 
                      border: '1px solid hsl(217, 33%, 25%)' 
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(214, 100%, 60%)" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(214, 100%, 60%)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="Recent Arrears" className="h-full">
              <Table 
                dataSource={ulbArrears} 
                columns={arrearsColumns} 
                pagination={false}
                size="small"
              />
            </Card>
          </motion.div>
        </Col>
      </Row>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <Card title="Quick Actions">
          <div className="flex flex-wrap gap-3">
            <Button type="primary" size="large">Add Property</Button>
            <Button size="large">Create Arrear</Button>
            <Button size="large">Generate Report</Button>
            <Button size="large">Sync Data</Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ULBDashboard;
