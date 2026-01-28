'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'glass-card rounded-3xl p-6',
        'transition-all duration-300',
        hover && 'hover:shadow-xl hover:shadow-purple/15',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
