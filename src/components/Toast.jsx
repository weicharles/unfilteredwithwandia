import React from 'react';
import { IconCheck, IconClose } from './Icons';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        backgroundColor: '#0C0C0D',
        color: '#FFFFFF',
        padding: '14px 22px',
        borderRadius: 'var(--radius-pill)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        border: '1.5px solid var(--color-pink)',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <span style={{ color: '#25D366' }}>
        <IconCheck size={20} />
      </span>
      <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>
        {message}
      </span>
      <button
        onClick={onClose}
        style={{
          color: '#888890',
          cursor: 'pointer',
          padding: '2px',
          marginLeft: '6px'
        }}
      >
        <IconClose size={16} />
      </button>

      <style>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
