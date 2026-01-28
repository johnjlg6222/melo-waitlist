'use client';

import { motion } from 'framer-motion';

interface Shape {
  className: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity: number;
  floatRange: number;
  xMovement?: number;
  duration: number;
  delay: number;
}

interface FloatingShapesProps {
  variant?: 'hero' | 'section';
}

export default function FloatingShapes({ variant = 'hero' }: FloatingShapesProps) {
  const shapes: Shape[] = variant === 'hero' ? heroShapes : sectionShapes;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: shape.opacity,
            y: [0, shape.floatRange, 0],
            x: shape.xMovement ? [0, shape.xMovement, 0] : 0,
          }}
          transition={{
            opacity: { duration: 1, delay: shape.delay },
            y: {
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            },
            x: shape.xMovement
              ? {
                  duration: shape.duration * 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: shape.delay,
                }
              : {},
          }}
          className={`absolute ${shape.className}`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
        />
      ))}
    </div>
  );
}

const heroShapes: Shape[] = [
  {
    className: 'w-72 h-72 rounded-full bg-gradient-to-br from-lavender/40 to-purple/20 blur-3xl',
    top: '-10%',
    left: '-5%',
    opacity: 0.6,
    floatRange: -30,
    duration: 8,
    delay: 0,
  },
  {
    className: 'w-96 h-96 rounded-full bg-gradient-to-br from-peach/40 to-coral/20 blur-3xl',
    top: '20%',
    right: '-10%',
    opacity: 0.5,
    floatRange: 40,
    duration: 10,
    delay: 1,
  },
  {
    className: 'w-64 h-64 rounded-full bg-gradient-to-br from-mint/30 to-lavender/20 blur-2xl',
    bottom: '10%',
    left: '10%',
    opacity: 0.4,
    floatRange: -25,
    xMovement: 20,
    duration: 7,
    delay: 2,
  },
  {
    className: 'w-48 h-48 rounded-full bg-gradient-to-br from-pink/30 to-purple/20 blur-2xl',
    top: '60%',
    right: '20%',
    opacity: 0.3,
    floatRange: 20,
    duration: 6,
    delay: 0.5,
  },
];

const sectionShapes: Shape[] = [
  {
    className: 'w-48 h-48 rounded-full bg-gradient-to-br from-lavender/30 to-transparent blur-2xl',
    top: '0%',
    right: '5%',
    opacity: 0.4,
    floatRange: -20,
    duration: 6,
    delay: 0,
  },
  {
    className: 'w-32 h-32 rounded-full bg-gradient-to-br from-peach/30 to-transparent blur-xl',
    bottom: '10%',
    left: '5%',
    opacity: 0.3,
    floatRange: 15,
    duration: 5,
    delay: 1,
  },
];
