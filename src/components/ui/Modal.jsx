import React from 'react';
import Button from './Button.jsx';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

export default function Modal({ isOpen, onClose, title, children, actions }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* content */}
      <div className="relative w-[90%] max-w-lg rounded-2xl bg-slate-800 p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-semibold">{title}</h2>
        <div className="space-y-4">{children}</div>
        {actions && (
          <div className="mt-6 flex justify-end gap-3">
            {actions}
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
