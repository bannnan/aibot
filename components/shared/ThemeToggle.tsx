'use client';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme) {
      // Sync DaisyUI theme with next-themes
      document.documentElement.setAttribute(
        'data-theme',
        theme === 'dark' ? 'black' : 'corporate'
      );
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="btn btn-primary"
    >
      {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}
