import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  icon,
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#046865] to-[#21A0A0] text-white shadow-lg shadow-[#046865]/30 hover:shadow-xl hover:shadow-[#21A0A0]/40 hover:scale-105 w-full sm:w-auto',
    secondary: 'bg-transparent text-[#046865] hover:text-[#E53D00] hover:scale-105 w-full sm:w-auto',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {icon && <span className="w-3 h-3">{icon}</span>}
    </button>
  );
}