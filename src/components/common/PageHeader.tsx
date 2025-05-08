import { motion } from 'framer-motion';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function PageHeader({ 
  title, 
  subtitle, 
  align = 'center' 
}: PageHeaderProps) {
  return (
    <div 
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title.split(' ').map((word, index, array) => (
          <span key={index}>
            {index === array.length - 1 ? (
              <span className="gradient-text">{word}</span>
            ) : (
              `${word} `
            )}
          </span>
        ))}
      </motion.h1>
      
      {subtitle && (
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}