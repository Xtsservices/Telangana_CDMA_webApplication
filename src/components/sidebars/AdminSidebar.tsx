import { Menu } from 'antd';
import { 
  DashboardOutlined, 
  TeamOutlined, 
  FileTextOutlined, 
  SettingOutlined, 
  ThunderboltOutlined 
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/dashboard/admin', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: '/dashboard/admin/role-management', icon: <TeamOutlined />, label: 'Role Management' },
    { key: '/dashboard/admin/system-logs', icon: <FileTextOutlined />, label: 'System Logs' },
    { key: '/dashboard/admin/settings', icon: <SettingOutlined />, label: 'Settings' },
    { key: '/dashboard/admin/quick-actions', icon: <ThunderboltOutlined />, label: 'Quick Actions' },
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

export default AdminSidebar;
