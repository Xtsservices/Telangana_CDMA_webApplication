import { Card, Row, Col, Statistic, Table, Button, Tag } from 'antd';
import { 
  NotificationOutlined, 
  CheckCircleOutlined, 
  ClockCircleOutlined, 
  CloseCircleOutlined 
} from '@ant-design/icons';
import { demandNotices, disputeTickets } from '@/data/sampleData';
import { motion } from 'framer-motion';

const RIDashboard = () => {
  const noticesColumns = [
    { title: 'PTIN', dataIndex: 'ptin', key: 'ptin' },
    { title: 'Owner', dataIndex: 'owner', key: 'owner' },
    { title: 'Method', dataIndex: 'method', key: 'method' },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Delivered' ? 'green' : status === 'Pending' ? 'orange' : 'red'}>
          {status}
        </Tag>
      )
    },
  ];

  const ticketsColumns = [
    { title: 'Ticket ID', dataIndex: 'ticketId', key: 'ticketId' },
    { title: 'Property ID', dataIndex: 'propertyId', key: 'propertyId' },
    { title: 'Issue', dataIndex: 'issue', key: 'issue' },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Resolved' ? 'green' : status === 'Open' ? 'red' : 'blue'}>
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
                title="Total Notices Sent"
                value={248}
                valueStyle={{ color: 'hsl(214, 100%, 60%)' }}
                suffix={<NotificationOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <Statistic
                title="Delivered"
                value={195}
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
                title="Pending"
                value={38}
                valueStyle={{ color: '#eab308' }}
                suffix={<ClockCircleOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20">
              <Statistic
                title="Failed"
                value={15}
                valueStyle={{ color: '#ef4444' }}
                suffix={<CloseCircleOutlined />}
              />
            </Card>
          </motion.div>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="Recent Demand Notices" className="h-full">
              <Table 
                dataSource={demandNotices} 
                columns={noticesColumns} 
                pagination={false}
                size="small"
              />
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} lg={12}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card title="Dispute Tickets" className="h-full">
              <Table 
                dataSource={disputeTickets} 
                columns={ticketsColumns} 
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
            <Button type="primary" size="large">Send Notice</Button>
            <Button size="large">Resolve Ticket</Button>
            <Button size="large">Sync Data</Button>
            <Button size="large">Generate Report</Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default RIDashboard;
