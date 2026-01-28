'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type MeloState = 'welcome' | 'happy' | 'love' | 'thinking' | 'waving';

interface AnimatedMeloProps {
  state?: MeloState;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSpeechBubble?: boolean;
  speechText?: string;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
};

const imageSizes = {
  sm: 64,
  md: 96,
  lg: 128,
  xl: 192,
};

const stateImages: Record<MeloState, string> = {
  welcome: '/melo/melo-happy.png',
  happy: '/melo/melo-happy.png',
  love: '/melo/melo-in-love.png',
  waving: '/melo/melo-overjoyed.png',
  thinking: '/melo/melo-sleep.png',
};

const glowColors: Record<MeloState, string> = {
  welcome: 'bg-purple/30',
  happy: 'bg-pink/30',
  love: 'bg-coral/30',
  thinking: 'bg-lavender/30',
  waving: 'bg-purple/30',
};

export default function AnimatedMelo({
  state = 'welcome',
  size = 'lg',
  className,
  showSpeechBubble = false,
  speechText,
}: AnimatedMeloProps) {
  const breathingAnimation = {
    animate: {
      scale: [1, 1.03, 1],
      y: [0, -3, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  return (
    <div className={cn('relative inline-flex flex-col items-center', className)}>
      {/* Speech Bubble */}
      {showSpeechBubble && speechText && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 z-10"
        >
          <div className="glass-card rounded-2xl p-4 text-center relative">
            <p className="text-sm text-charcoal font-medium">{speechText}</p>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/60 rotate-45" />
          </div>
        </motion.div>
      )}

      {/* Melo Character */}
      <motion.div
        {...breathingAnimation}
        className={cn(
          sizeClasses[size],
          'relative cursor-pointer'
        )}
      >
        {/* Outer glow */}
        <div className={cn(
          'absolute inset-0 rounded-full blur-xl',
          glowColors[state]
        )} />

        {/* Melo Image */}
        <div className="relative w-full h-full">
          <Image
            src={stateImages[state]}
            alt={`Melo ${state}`}
            width={imageSizes[size]}
            height={imageSizes[size]}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Floating hearts for love state */}
        {state === 'love' && (
          <>
            <motion.div
              animate={{
                y: [-10, -40],
                x: [0, 10],
                opacity: [1, 0],
                scale: [0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 left-1/2 text-pink text-lg"
            >
              💕
            </motion.div>
            <motion.div
              animate={{
                y: [-10, -50],
                x: [0, -15],
                opacity: [1, 0],
                scale: [0.5, 1.2],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
              className="absolute -top-2 left-1/3 text-coral text-xl"
            >
              💗
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}
