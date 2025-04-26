import React from 'react';
import clsx from 'clsx';

export default function Card({ children, className = '' }) {
  return (
    <div
      className={clsx(
        'rounded-2xl bg-slate-800/60 backdrop-blur shadow-lg p-6',
        className
      )}
    >
      {children}
    </div>
  );
}
