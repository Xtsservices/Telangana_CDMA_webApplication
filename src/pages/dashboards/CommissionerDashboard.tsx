import { Card, Row, Col, Statistic, Table, Progress, Button } from 'antd';
import { 
  DollarOutlined, 
  TrophyOutlined, 
  RiseOutlined, 
  TeamOutlined 
} from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ulbPerformance, complaints } from '@/data/sampleData';
import { motion } from 'framer-motion';

const CommissionerDashboard = () => {
  const performanceColumns = [
    { title: 'ULB', dataIndex: 'ulb', key: 'ulb' },
    { title: "Today's Collection (₹)", dataIndex: 'today', key: 'today' },
    { title: 'Monthly Collection (₹)', dataIndex: 'month', key: 'month' },
    { 
      title: 'Target Completion', 
      dataIndex: 'completion', 
      key: 'completion',
      render: (completion: number) => <Progress percent={completion} size="small" />
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
                value={18500000}
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
                title="Top Performing ULB"
                value="Hyderabad"
                valueStyle={{ color: '#10b981' }}
                suffix={<TrophyOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <Statistic
                title="Growth Rate"
                value={12.5}
                suffix="%"
                valueStyle={{ color: 'hsl(180, 80%, 55%)' }}
                prefix={<RiseOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/20">
              <Statistic
                title="Active ULBs"
                value={142}
                valueStyle={{ color: '#eab308' }}
                suffix={<TeamOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="ULB Revenue Comparison" className="h-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ulbPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 25%)" />
                  <XAxis dataKey="ulb" stroke="hsl(215, 20%, 65%)" />
                  <YAxis stroke="hsl(215, 20%, 65%)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(222, 47%, 15%)', 
                      border: '1px solid hsl(217, 33%, 25%)' 
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="month" fill="hsl(214, 100%, 60%)" name="Monthly Revenue" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="ULB Performance" className="h-full">
              <Table 
                dataSource={ulbPerformance} 
                columns={performanceColumns} 
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
            <Button type="primary" size="large">View ULB Stats</Button>
            <Button size="large">Approve Reports</Button>
            <Button size="large">Send Directive</Button>
            <Button size="large">Generate Summary</Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default CommissionerDashboard;
