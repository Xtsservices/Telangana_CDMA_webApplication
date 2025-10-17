import { Card, Row, Col, Statistic, Table, Tag, Button } from 'antd';
import { 
  GlobalOutlined, 
  TabletOutlined, 
  CheckCircleOutlined, 
  CloseCircleOutlined 
} from '@ant-design/icons';
import { deviceMonitoring, staffLogs } from '@/data/sampleData';
import { motion } from 'framer-motion';

const CDMADashboard = () => {
  const deviceColumns = [
    { title: 'Device ID', dataIndex: 'deviceId', key: 'deviceId' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Online' ? 'green' : 'red'} icon={status === 'Online' ? <CheckCircleOutlined /> : <CloseCircleOutlined />}>
          {status}
        </Tag>
      )
    },
    { title: 'Last Sync', dataIndex: 'lastSync', key: 'lastSync' },
  ];

  const staffColumns = [
    { title: 'Staff ID', dataIndex: 'staffId', key: 'staffId' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Action', dataIndex: 'action', key: 'action' },
    { title: 'Time', dataIndex: 'time', key: 'time' },
  ];

  return (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <Statistic
                title="Total Municipalities"
                value={142}
                valueStyle={{ color: 'hsl(214, 100%, 60%)' }}
                suffix={<GlobalOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <Statistic
                title="Online Devices"
                value={128}
                valueStyle={{ color: '#10b981' }}
                suffix={<TabletOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20">
              <Statistic
                title="Offline Devices"
                value={14}
                valueStyle={{ color: '#ef4444' }}
                suffix={<TabletOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <Statistic
                title="Active Staff"
                value={247}
                valueStyle={{ color: 'hsl(180, 80%, 55%)' }}
              />
            </Card>
          </motion.div>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="Device Monitoring" className="h-full">
              <Table 
                dataSource={deviceMonitoring} 
                columns={deviceColumns} 
                pagination={false}
                size="small"
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="Recent Staff Activity" className="h-full">
              <Table 
                dataSource={staffLogs} 
                columns={staffColumns} 
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
            <Button type="primary" size="large">Monitor Devices</Button>
            <Button size="large">Audit Logs</Button>
            <Button size="large">Generate Report</Button>
            <Button size="large">System Health Check</Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default CDMADashboard;
