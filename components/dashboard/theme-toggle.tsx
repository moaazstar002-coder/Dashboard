'use client';

import { useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="rounded p-2 hover:bg-gray-100"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
