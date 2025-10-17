import { Card, Row, Col, Statistic, Table, Tag, Button } from 'antd';
import { 
  TeamOutlined, 
  SafetyOutlined, 
  SettingOutlined, 
  FileTextOutlined 
} from '@ant-design/icons';
import { roleManagement, systemLogs } from '@/data/sampleData';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const roleColumns = [
    { title: 'Role', dataIndex: 'role', key: 'role' },
    { title: 'Total Users', dataIndex: 'users', key: 'users' },
    { title: 'Active', dataIndex: 'active', key: 'active' },
    { title: 'Pending', dataIndex: 'pending', key: 'pending' },
  ];

  const logColumns = [
    { title: 'Log ID', dataIndex: 'logId', key: 'logId' },
    { title: 'Action', dataIndex: 'action', key: 'action' },
    { title: 'User', dataIndex: 'user', key: 'user' },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Success' ? 'green' : 'red'}>
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
                title="Total Users"
                value={165}
                valueStyle={{ color: 'hsl(214, 100%, 60%)' }}
                suffix={<TeamOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <Statistic
                title="Active Sessions"
                value={128}
                valueStyle={{ color: '#10b981' }}
                suffix={<SafetyOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <Statistic
                title="System Health"
                value={98.5}
                suffix="%"
                valueStyle={{ color: 'hsl(180, 80%, 55%)' }}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/20">
              <Statistic
                title="Total Logs"
                value={1247}
                valueStyle={{ color: '#eab308' }}
                suffix={<FileTextOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="Role Management" className="h-full">
              <Table 
                dataSource={roleManagement} 
                columns={roleColumns} 
                pagination={false}
                size="small"
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="Recent System Logs" className="h-full">
              <Table 
                dataSource={systemLogs} 
                columns={logColumns} 
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
            <Button type="primary" size="large">Add User</Button>
            <Button size="large">Update Roles</Button>
            <Button size="large">View System Logs</Button>
            <Button size="large">System Settings</Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
