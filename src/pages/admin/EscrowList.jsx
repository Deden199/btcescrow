import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card.jsx';

const items = [
  { id: 'ORD-1001', user: 'alice', asset: 'BTC', amount: 0.2, status: 'Pending' },
  { id: 'ORD-1002', user: 'bob', asset: 'USDT', amount: 1500, status: 'Funded' },
];

export default function EscrowList() {
  return (
    <Card>
      <h1 className="mb-4 text-xl font-semibold">Escrow Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-400">
              <th className="px-4 py-2">Order</th>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Asset</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody>
            {items.map((e) => (
              <tr key={e.id} className="border-t border-slate-700">
                <td className="px-4 py-2">{e.id}</td>
                <td className="px-4 py-2">{e.user}</td>
                <td className="px-4 py-2">{e.amount}</td>
                <td className="px-4 py-2">{e.asset}</td>
                <td className="px-4 py-2">{e.status}</td>
                <td className="px-4 py-2">
                  <Link to={`/admin/escrows/${e.id}`} className="text-primary hover:underline">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
