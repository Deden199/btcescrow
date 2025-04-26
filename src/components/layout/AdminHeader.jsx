import React from 'react';
import { Menu } from 'lucide-react';

export default function AdminHeader({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between bg-slate-900/80 px-4 backdrop-blur lg:ml-64">
      <button
        onClick={onMenuClick}
        className="lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu />
      </button>
      <h2 className="text-lg font-semibold">Admin Panel</h2>
      <div className="flex items-center gap-4">
        <span className="h-8 w-8 rounded-full bg-primary/70" />
      </div>
    </header>
  );
}
