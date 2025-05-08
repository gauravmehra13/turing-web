import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className = '',
  fullWidth = false,
  onClick,
  href,
  disabled = false,
}: ButtonProps) {
  // Variant styles
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'bg-transparent text-white border border-primary-500 hover:bg-primary-500/10',
    text: 'bg-transparent text-primary-500 hover:text-primary-400 hover:underline',
  };

  // Size styles
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `
    rounded-lg font-medium transition-all duration-300
    flex items-center justify-center
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  // Render as anchor if href is provided
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={!disabled ? { scale: 1.05 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
      >
        {content}
      </motion.a>
    );
  }

  // Render as button
  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {content}
    </motion.button>
  );
}