// src/components/ui/Button.js
import React from 'react';

export function Button({ variant, size, children }) {
  return (
    <button className={`btn ${variant} ${size}`}>
      {children}
    </button>
  );
}
