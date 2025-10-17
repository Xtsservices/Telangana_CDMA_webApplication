import { Menu } from 'antd';
import { 
  DashboardOutlined, 
  FileTextOutlined, 
  NotificationOutlined, 
  CustomerServiceOutlined, 
  ThunderboltOutlined 
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const RISidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/dashboard/ri', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: '/dashboard/ri/arrears', icon: <FileTextOutlined />, label: 'Arrears' },
    { key: '/dashboard/ri/demand-notices', icon: <NotificationOutlined />, label: 'Demand Notices' },
    { key: '/dashboard/ri/dispute-tickets', icon: <CustomerServiceOutlined />, label: 'Dispute Tickets' },
    { key: '/dashboard/ri/quick-actions', icon: <ThunderboltOutlined />, label: 'Quick Actions' },
  ];

  return (
    <Menu
      mode="inline"
      selectedKeys={[location.pathname]}
      onClick={({ key }) => navigate(key)}
      items={menuItems}
      className="h-full border-r-0"
    />
  );
};

export default RISidebar;
