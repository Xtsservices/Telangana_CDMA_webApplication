import { Menu } from 'antd';
import { 
  DashboardOutlined, 
  GlobalOutlined, 
  TabletOutlined, 
  TeamOutlined, 
  ThunderboltOutlined 
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const CDMASidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/dashboard/cdma', icon: <DashboardOutlined />, label: 'State Dashboard' },
    { key: '/dashboard/cdma/municipality-reports', icon: <GlobalOutlined />, label: 'Municipality Reports' },
    { key: '/dashboard/cdma/device-monitoring', icon: <TabletOutlined />, label: 'Device Monitoring' },
    { key: '/dashboard/cdma/staff-logs', icon: <TeamOutlined />, label: 'Staff Logs' },
    { key: '/dashboard/cdma/quick-actions', icon: <ThunderboltOutlined />, label: 'Quick Actions' },
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

export default CDMASidebar;
