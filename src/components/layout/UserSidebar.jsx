import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet, PlusCircle } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { to: '/', label: 'Dashboard', icon: <Wallet size={18} /> },
  { to: '/create', label: 'Create Escrow', icon: <PlusCircle size={18} /> },
];

export default function UserSidebar({ mobile = false }) {
  const containerCls = clsx(
    'w-64 flex-col gap-2 bg-slate-900/70 p-4 backdrop-blur z-40',
    mobile && 'flex',
    !mobile && 'hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex'
  );

  return (
    <aside className={containerCls}>
      <h1 className="mb-6 text-2xl font-bold tracking-wide">Escrow</h1>

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
