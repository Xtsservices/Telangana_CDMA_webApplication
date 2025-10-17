import { ReactNode, useState } from 'react';
import { Layout, Button, Avatar, Dropdown } from 'antd';
import { 
  MenuFoldOutlined, 
  MenuUnfoldOutlined, 
  UserOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { logout } from '@/store/authSlice';
import { motion } from 'framer-motion';

const { Header, Sider, Content } = Layout;

interface DashboardLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, sidebar, title }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mobile, role } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const userMenuItems = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-sidebar border-r border-sidebar-border"
        width={250}
      >
        <div className="h-16 flex items-center justify-center border-b border-sidebar-border">
          <motion.h2 
            className="text-sidebar-foreground font-bold text-lg"
            animate={{ opacity: collapsed ? 0 : 1 }}
          >
            {!collapsed && 'CDMA Portal'}
          </motion.h2>
        </div>
        {sidebar}
      </Sider>
      
      <Layout>
        <Header className="bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="text-foreground"
            />
            <h1 className="text-xl font-semibold text-foreground m-0">{title}</h1>
          </div>
          
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
              <div className="text-right">
                <div className="text-sm font-medium text-foreground">{role}</div>
                <div className="text-xs text-muted-foreground">+91 {mobile}</div>
              </div>
              <Avatar icon={<UserOutlined />} className="bg-primary" />
            </div>
          </Dropdown>
        </Header>
        
        <Content className="m-6 p-6 bg-card rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
