import React from 'react';
import Card from '../../components/ui/Card.jsx';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button.jsx';

const dummyEscrows = [
  { id: 'ORD-1001', amount: 0.5, asset: 'BTC', status: 'Pending' },
  { id: 'ORD-1002', amount: 1000, asset: 'USDT', status: 'Funded' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome back 👋</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-400">Total Escrows</p>
          <p className="mt-2 text-3xl font-semibold">12</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Locked Value</p>
          <p className="mt-2 text-3xl font-semibold">1.8 BTC</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Released</p>
          <p className="mt-2 text-3xl font-semibold">4,200 USDT</p>
        </Card>
      </div>

      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Escrows</h2>
          <Link to="/create">
            <Button variant="outline">New Escrow</Button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400">
                <th className="px-4 py-2">Order</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Asset</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2" />
              </tr>
            </thead>
            <tbody>
              {dummyEscrows.map((e) => (
                <tr key={e.id} className="border-t border-slate-700">
                  <td className="px-4 py-2">{e.id}</td>
                  <td className="px-4 py-2">{e.amount}</td>
                  <td className="px-4 py-2">{e.asset}</td>
                  <td className="px-4 py-2">{e.status}</td>
                  <td className="px-4 py-2">
                    <Link to={`/fund/${e.id}`} className="text-primary hover:underline">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
