import React from 'react';
import Card from '../../components/ui/Card.jsx';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Overview</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <p className="text-sm text-slate-400">Total Users</p>
          <p className="mt-2 text-3xl font-semibold">128</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Active Escrows</p>
          <p className="mt-2 text-3xl font-semibold">32</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Volume 24h</p>
          <p className="mt-2 text-3xl font-semibold">$54K</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Disputes</p>
          <p className="mt-2 text-3xl font-semibold">0</p>
        </Card>
      </div>
    </div>
  );
}
