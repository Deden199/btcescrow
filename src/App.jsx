import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import UserLayout from './components/layout/UserLayout.jsx';
import AdminLayout from './components/layout/AdminLayout.jsx';

import UserDashboard from './pages/user/Dashboard.jsx';
import CreateEscrow from './pages/user/CreateEscrow.jsx';
import FundEscrow from './pages/user/FundEscrow.jsx';
import ReleaseEscrow from './pages/user/ReleaseEscrow.jsx';

import AdminDashboard from './pages/admin/Dashboard.jsx';
import EscrowList from './pages/admin/EscrowList.jsx';
import EscrowDetail from './pages/admin/EscrowDetail.jsx';
import Settings from './pages/admin/Settings.jsx';
import Login from './pages/admin/Login.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="create" element={<CreateEscrow />} />
          <Route path="fund/:orderId" element={<FundEscrow />} />
          <Route path="release/:orderId" element={<ReleaseEscrow />} />
        </Route>

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="escrows" element={<EscrowList />} />
          <Route path="escrows/:orderId" element={<EscrowDetail />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
