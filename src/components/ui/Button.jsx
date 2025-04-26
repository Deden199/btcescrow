import React from 'react';
import clsx from 'clsx';

const variants = {
  primary: 'bg-primary hover:bg-primary-dark text-white',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-primary/10',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium shadow transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
