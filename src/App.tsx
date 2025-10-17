import { Provider } from 'react-redux';
import { ConfigProvider, theme } from 'antd';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { store } from './store/store';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/DashboardLayout';
import ULBSidebar from './components/sidebars/ULBSidebar';
import RISidebar from './components/sidebars/RISidebar';
import CommissionerSidebar from './components/sidebars/CommissionerSidebar';
import CDMASidebar from './components/sidebars/CDMASidebar';
import CGGSidebar from './components/sidebars/CGGSidebar';
import AdminSidebar from './components/sidebars/AdminSidebar';
import ULBDashboard from './pages/dashboards/ULBDashboard';
import RIDashboard from './pages/dashboards/RIDashboard';
import CommissionerDashboard from './pages/dashboards/CommissionerDashboard';
import CDMADashboard from './pages/dashboards/CDMADashboard';
import CGGDashboard from './pages/dashboards/CGGDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';

const queryClient = new QueryClient();

// Placeholder component for sub-pages
const ComingSoon = () => (
  <div className="flex items-center justify-center h-64">
    <h2 className="text-2xl text-muted-foreground">Coming Soon...</h2>
  </div>
);

const App = () => (
  <Provider store={store}>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#4299e1',
          colorBgContainer: 'hsl(222, 47%, 15%)',
          colorBorder: 'hsl(217, 33%, 25%)',
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              
              {/* ULB Routes */}
              <Route path="/dashboard/ulb/*" element={
                <ProtectedRoute allowedRoles={['ULB']}>
                  <DashboardLayout sidebar={<ULBSidebar />} title="ULB Officer Dashboard">
                    <Routes>
                      <Route index element={<ULBDashboard />} />
                      <Route path="arrears" element={<ComingSoon />} />
                      <Route path="property-mapping" element={<ComingSoon />} />
                      <Route path="reports" element={<ComingSoon />} />
                      <Route path="quick-actions" element={<ComingSoon />} />
                    </Routes>
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              
              {/* RI Routes */}
              <Route path="/dashboard/ri/*" element={
                <ProtectedRoute allowedRoles={['RI']}>
                  <DashboardLayout sidebar={<RISidebar />} title="Revenue Inspector Dashboard">
                    <Routes>
                      <Route index element={<RIDashboard />} />
                      <Route path="arrears" element={<ComingSoon />} />
                      <Route path="demand-notices" element={<ComingSoon />} />
                      <Route path="dispute-tickets" element={<ComingSoon />} />
                      <Route path="quick-actions" element={<ComingSoon />} />
                    </Routes>
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              
              {/* Commissioner Routes */}
              <Route path="/dashboard/commissioner/*" element={
                <ProtectedRoute allowedRoles={['Commissioner']}>
                  <DashboardLayout sidebar={<CommissionerSidebar />} title="Commissioner Dashboard">
                    <Routes>
                      <Route index element={<CommissionerDashboard />} />
                      <Route path="ulb-performance" element={<ComingSoon />} />
                      <Route path="revenue-reports" element={<ComingSoon />} />
                      <Route path="complaints" element={<ComingSoon />} />
                      <Route path="quick-actions" element={<ComingSoon />} />
                    </Routes>
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              
              {/* CDMA Routes */}
              <Route path="/dashboard/cdma/*" element={
                <ProtectedRoute allowedRoles={['CDMA']}>
                  <DashboardLayout sidebar={<CDMASidebar />} title="CDMA HQ Dashboard">
                    <Routes>
                      <Route index element={<CDMADashboard />} />
                      <Route path="municipality-reports" element={<ComingSoon />} />
                      <Route path="device-monitoring" element={<ComingSoon />} />
                      <Route path="staff-logs" element={<ComingSoon />} />
                      <Route path="quick-actions" element={<ComingSoon />} />
                    </Routes>
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              
              {/* CGG Routes */}
              <Route path="/dashboard/cgg/*" element={
                <ProtectedRoute allowedRoles={['CGG']}>
                  <DashboardLayout sidebar={<CGGSidebar />} title="CGG Analytics Dashboard">
                    <Routes>
                      <Route index element={<CGGDashboard />} />
                      <Route path="api-monitoring" element={<ComingSoon />} />
                      <Route path="feedback-reports" element={<ComingSoon />} />
                      <Route path="data-sync" element={<ComingSoon />} />
                      <Route path="quick-actions" element={<ComingSoon />} />
                    </Routes>
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              
              {/* Admin Routes */}
              <Route path="/dashboard/admin/*" element={
                <ProtectedRoute allowedRoles={['Admin']}>
                  <DashboardLayout sidebar={<AdminSidebar />} title="Admin Dashboard">
                    <Routes>
                      <Route index element={<AdminDashboard />} />
                      <Route path="role-management" element={<ComingSoon />} />
                      <Route path="system-logs" element={<ComingSoon />} />
                      <Route path="settings" element={<ComingSoon />} />
                      <Route path="quick-actions" element={<ComingSoon />} />
                    </Routes>
                  </DashboardLayout>
                </ProtectedRoute>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ConfigProvider>
  </Provider>
);

export default App;
