'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure client-side rendering only
  useEffect(() => setMounted(true), []);

  // Sync DaisyUI theme with next-themes once mounted
  useEffect(() => {
    if (mounted && theme) {
      document.documentElement.setAttribute(
        'data-theme',
        theme === 'dark' ? 'black' : 'corporate'
      );
    }
  }, [mounted, theme]);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}