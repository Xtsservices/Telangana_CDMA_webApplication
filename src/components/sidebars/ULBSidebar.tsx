import { Menu } from 'antd';
import { 
  DashboardOutlined, 
  FileTextOutlined, 
  EnvironmentOutlined, 
  BarChartOutlined, 
  ThunderboltOutlined 
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const ULBSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/dashboard/ulb', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: '/dashboard/ulb/arrears', icon: <FileTextOutlined />, label: 'Arrears' },
    { key: '/dashboard/ulb/property-mapping', icon: <EnvironmentOutlined />, label: 'Property Mapping' },
    { key: '/dashboard/ulb/reports', icon: <BarChartOutlined />, label: 'Reports' },
    { key: '/dashboard/ulb/quick-actions', icon: <ThunderboltOutlined />, label: 'Quick Actions' },
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

export default ULBSidebar;
