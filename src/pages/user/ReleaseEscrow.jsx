import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/ui/Card.jsx';
import Button from '../../components/ui/Button.jsx';

export default function ReleaseEscrow() {
  const { orderId } = useParams();

  return (
    <Card className="mx-auto max-w-md space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Release Escrow</h1>
        <p className="text-slate-400">Order ID: {orderId}</p>
      </div>

      <p className="text-sm">
        Please confirm that you have received the goods/service before releasing the funds to
        the seller.
      </p>

      <Button className="w-full" variant="primary">
        Release Funds
      </Button>
    </Card>
  );
}
