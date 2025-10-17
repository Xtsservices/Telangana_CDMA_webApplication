import { Menu } from 'antd';
import { 
  DashboardOutlined, 
  TrophyOutlined, 
  FileTextOutlined, 
  CustomerServiceOutlined, 
  ThunderboltOutlined 
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const CommissionerSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/dashboard/commissioner', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: '/dashboard/commissioner/ulb-performance', icon: <TrophyOutlined />, label: 'ULB Performance' },
    { key: '/dashboard/commissioner/revenue-reports', icon: <FileTextOutlined />, label: 'Revenue Reports' },
    { key: '/dashboard/commissioner/complaints', icon: <CustomerServiceOutlined />, label: 'Complaints' },
    { key: '/dashboard/commissioner/quick-actions', icon: <ThunderboltOutlined />, label: 'Quick Actions' },
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

export default CommissionerSidebar;
