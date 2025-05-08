import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type CardProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  glassEffect?: boolean;
  hoverEffect?: boolean;
  onClick?: () => void;
  children?: ReactNode;
};

export default function Card({
  title,
  description,
  icon,
  className = '',
  glassEffect = true,
  hoverEffect = true,
  onClick,
  children,
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.2)' } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${glassEffect ? 'card-glass' : 'bg-dark-400 rounded-xl'} p-6 transition-all duration-300 ${
        hoverEffect ? 'hover:border-primary-500/50 cursor-pointer' : ''
      } ${className}`}
      onClick={onClick}
    >
      {/* Card Icon */}
      {icon && (
        <div className="mb-4 text-primary-500">{icon}</div>
      )}
      
      {/* Card Content */}
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      {description && (
        <p className="text-gray-300">{description}</p>
      )}
      
      {/* Additional Content */}
      {children}
    </motion.div>
  );
}