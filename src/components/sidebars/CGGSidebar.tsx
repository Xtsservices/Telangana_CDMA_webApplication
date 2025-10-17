import { Menu } from 'antd';
import { 
  DashboardOutlined, 
  ApiOutlined, 
  MessageOutlined, 
  SyncOutlined, 
  ThunderboltOutlined 
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const CGGSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/dashboard/cgg', icon: <DashboardOutlined />, label: 'Analytics Dashboard' },
    { key: '/dashboard/cgg/api-monitoring', icon: <ApiOutlined />, label: 'API Monitoring' },
    { key: '/dashboard/cgg/feedback-reports', icon: <MessageOutlined />, label: 'Feedback Reports' },
    { key: '/dashboard/cgg/data-sync', icon: <SyncOutlined />, label: 'Data Sync Status' },
    { key: '/dashboard/cgg/quick-actions', icon: <ThunderboltOutlined />, label: 'Quick Actions' },
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

export default CGGSidebar;
