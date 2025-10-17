import { Card, Row, Col, Statistic, Table, Tag, Progress, Button } from 'antd';
import { 
  ApiOutlined, 
  CloudServerOutlined, 
  CheckCircleOutlined, 
  WarningOutlined 
} from '@ant-design/icons';
import { apiHealth, feedbackReports } from '@/data/sampleData';
import { motion } from 'framer-motion';

const CGGDashboard = () => {
  const apiColumns = [
    { title: 'Service', dataIndex: 'service', key: 'service' },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Active' ? 'green' : status === 'Stable' ? 'blue' : 'orange'}>
          {status}
        </Tag>
      )
    },
    { title: 'Latency (ms)', dataIndex: 'latencyMs', key: 'latencyMs' },
    { 
      title: 'Uptime', 
      dataIndex: 'uptime', 
      key: 'uptime',
      render: (uptime: number) => <Progress percent={uptime} size="small" />
    },
  ];

  const feedbackColumns = [
    { title: 'Report ID', dataIndex: 'reportId', key: 'reportId' },
    { title: 'User', dataIndex: 'user', key: 'user' },
    { title: 'Message', dataIndex: 'message', key: 'message' },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Reviewed' ? 'green' : status === 'In Progress' ? 'blue' : 'orange'}>
          {status}
        </Tag>
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
                title="Active APIs"
                value={12}
                valueStyle={{ color: 'hsl(214, 100%, 60%)' }}
                suffix={<ApiOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <Statistic
                title="System Uptime"
                value={99.8}
                suffix="%"
                valueStyle={{ color: '#10b981' }}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <Statistic
                title="Avg Response Time"
                value={230}
                suffix="ms"
                valueStyle={{ color: 'hsl(180, 80%, 55%)' }}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/20">
              <Statistic
                title="Pending Feedback"
                value={8}
                valueStyle={{ color: '#eab308' }}
                suffix={<WarningOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="API Health Status" className="h-full">
              <Table 
                dataSource={apiHealth} 
                columns={apiColumns} 
                pagination={false}
                size="small"
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="User Feedback Reports" className="h-full">
              <Table 
                dataSource={feedbackReports} 
                columns={feedbackColumns} 
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
            <Button type="primary" size="large">API Health Check</Button>
            <Button size="large">Sync Status</Button>
            <Button size="large">View Analytics</Button>
            <Button size="large">System Report</Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default CGGDashboard;
