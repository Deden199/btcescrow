import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import AdminSidebar from './AdminSidebar.jsx';
import AdminHeader from './AdminHeader.jsx';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handler = () => setSidebarOpen(false);
    window.addEventListener('close-sidebar', handler);
    return () => window.removeEventListener('close-sidebar', handler);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${
          sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* drawer mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 transition-transform lg:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <AdminSidebar mobile />
      </aside>

      {/* sidebar desktop */}
      <AdminSidebar />

      {/* konten */}
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
      <main className="flex-1 px-4 py-6 lg:ml-64">
        <Outlet />
      </main>
    </div>
  );
}
