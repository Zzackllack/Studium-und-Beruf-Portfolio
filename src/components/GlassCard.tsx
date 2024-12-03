import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`
      backdrop-blur-lg bg-white/30 dark:bg-gray-900/30
      border border-white/20 dark:border-gray-700/30
      rounded-xl shadow-xl
      transition-all duration-500 ease-in-out
      hover:shadow-2xl hover:scale-[1.02]
      ${className}
    `}>
      {children}
    </div>
  );
}