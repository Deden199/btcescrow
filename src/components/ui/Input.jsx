import React from 'react';
import clsx from 'clsx';

export default function Input({ className = '', ...props }) {
  return (
    <input
      className={clsx(
        'w-full rounded-lg border border-slate-600 bg-slate-900/30 px-4 py-2 text-sm placeholder-slate-400 focus:border-primary focus:ring-0',
        className
      )}
      {...props}
    />
  );
}
