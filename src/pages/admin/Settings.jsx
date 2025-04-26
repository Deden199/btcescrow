import React from 'react';
import Card from '../../components/ui/Card.jsx';
import Input from '../../components/ui/Input.jsx';
import Button from '../../components/ui/Button.jsx';

export default function Settings() {
  return (
    <Card className="mx-auto max-w-lg space-y-6">
      <h1 className="text-xl font-semibold">Platform Settings</h1>
      <div className="space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm text-slate-400">API Key</span>
          <Input placeholder="************" disabled />
        </label>
        <Button variant="outline">Regenerate</Button>
      </div>
    </Card>
  );
}
