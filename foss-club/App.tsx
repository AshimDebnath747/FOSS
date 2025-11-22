import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { Layout } from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Library from './pages/Library';
import SoftwareDetail from './pages/SoftwareDetail';
import GlobalSearch from './pages/GlobalSearch';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import SoftwareForm from './pages/Admin/SoftwareForm';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

// Wrapper to conditionally render Navbar/Footer based on route (optional, keeping Layout everywhere for now except maybe login could be different, but following design reqs)
// Actually, dashboard usually has its own layout.
const AppRoutes = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin') && location.pathname !== '/admin/login';

  return (
    isAdminRoute ? (
      <Routes>
         <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
         <Route path="/admin/add" element={<ProtectedRoute><SoftwareForm /></ProtectedRoute>} />
         <Route path="/admin/edit/:id" element={<ProtectedRoute><SoftwareForm /></ProtectedRoute>} />
      </Routes>
    ) : (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library />} />
          <Route path="/software/:id" element={<SoftwareDetail />} />
          <Route path="/search" element={<GlobalSearch />} />
          <Route path="/admin/login" element={<Login />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    )
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <HashRouter>
           <AppRoutes />
        </HashRouter>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;