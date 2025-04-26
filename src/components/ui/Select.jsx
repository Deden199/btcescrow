import React from 'react';
import clsx from 'clsx';

export default function Select({ children, className = '', ...props }) {
  return (
    <select
      className={clsx(
        'w-full rounded-lg border border-slate-600 bg-slate-900/30 px-4 py-2 text-sm focus:border-primary focus:ring-0',
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
