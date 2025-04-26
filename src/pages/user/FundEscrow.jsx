import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/ui/Card.jsx';
import Button from '../../components/ui/Button.jsx';

export default function FundEscrow() {
  const { orderId } = useParams();

  return (
    <Card className="mx-auto max-w-md space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Fund Escrow</h1>
        <p className="text-slate-400">Order ID: {orderId}</p>
      </div>

      <div className="space-y-2">
        <p className="text-sm">Send the exact amount to the address below:</p>
        <div className="rounded-lg bg-slate-800 p-4 font-mono text-sm">
          1BoatSLRHtKNngkdXEeobR76b53LETtpyT
        </div>
      </div>

      <Button className="w-full">I have funded</Button>
    </Card>
  );
}
