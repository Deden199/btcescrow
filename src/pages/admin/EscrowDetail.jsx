import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/ui/Card.jsx';
import Button from '../../components/ui/Button.jsx';

export default function EscrowDetail() {
  const { orderId } = useParams();

  return (
    <Card className="space-y-6">
      <h1 className="text-xl font-semibold">Escrow Detail</h1>
      <dl className="grid grid-cols-2 gap-4 text-sm">
        <dt className="text-slate-400">Order ID</dt>
        <dd>{orderId}</dd>
        <dt className="text-slate-400">Buyer</dt>
        <dd>alice</dd>
        <dt className="text-slate-400">Amount</dt>
        <dd>0.2 BTC</dd>
        <dt className="text-slate-400">Status</dt>
        <dd>Pending</dd>
      </dl>

      <div className="flex gap-3">
        <Button variant="outline">Release</Button>
        <Button variant="ghost">Refund</Button>
      </div>
    </Card>
  );
}
