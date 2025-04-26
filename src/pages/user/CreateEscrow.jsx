import React, { useState } from 'react';
import Card from '../../components/ui/Card.jsx';
import Input from '../../components/ui/Input.jsx';
import Select from '../../components/ui/Select.jsx';
import Button from '../../components/ui/Button.jsx';

export default function CreateEscrow() {
  const [form, setForm] = useState({
    asset: 'BTC',
    amount: '',
    buyer: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submit', form);
  }

  return (
    <Card className="mx-auto max-w-lg">
      <h1 className="mb-6 text-xl font-semibold">Create New Escrow</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm text-slate-400">Asset</span>
          <Select name="asset" value={form.asset} onChange={handleChange}>
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="USDT">Tether (USDT)</option>
          </Select>
        </label>
        <label className="block">
          <span className="mb-1 block text-sm text-slate-400">Amount</span>
          <Input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="e.g. 0.1"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm text-slate-400">Buyer Address / Email</span>
          <Input
            name="buyer"
            value={form.buyer}
            onChange={handleChange}
            placeholder="Recipient wallet or email"
          />
        </label>
        <Button type="submit" className="w-full">
          Create Escrow
        </Button>
      </form>
    </Card>
  );
}
