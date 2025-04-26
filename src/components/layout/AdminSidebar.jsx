import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ListOrdered, Settings as Cog } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { to: '/admin', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { to: '/admin/escrows', label: 'Escrows', icon: <ListOrdered size={18} /> },
  { to: '/admin/settings', label: 'Settings', icon: <Cog size={18} /> },
];

export default function AdminSidebar({ mobile = false }) {
  const containerCls = clsx(
    'w-64 flex-col gap-2 bg-[#0d1117] p-4 backdrop-blur z-40',
    mobile && 'flex',
    !mobile && 'hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex'
  );

  return (
    <aside className={containerCls}>
      <h1 className="mb-6 text-2xl font-bold tracking-wide">Admin</h1>

      <nav className="space-y-1">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-800'
              }`
            }
            onClick={() => mobile && window.dispatchEvent(new Event('close-sidebar'))}
          >
            {icon}
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
