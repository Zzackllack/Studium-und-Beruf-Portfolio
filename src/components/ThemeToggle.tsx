import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

export function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full bg-opacity-20 backdrop-blur-lg hover:bg-opacity-30 transition-all duration-300
                dark:text-white text-gray-800 bg-white dark:bg-gray-800"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 hover:rotate-90 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 hover:rotate-90 transition-transform duration-500" />
      )}
    </button>
  );
}