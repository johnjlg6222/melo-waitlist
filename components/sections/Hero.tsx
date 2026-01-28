'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import AnimatedMelo from '@/components/ui/AnimatedMelo';
import WaitlistForm from '@/components/ui/WaitlistForm';
import FloatingShapes from '@/components/ui/FloatingShapes';
import FadeIn from '@/components/animations/FadeIn';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient animate-gradient" />
      <FloatingShapes variant="hero" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeIn delay={0.1}>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-purple" />
                <span className="text-sm font-semibold text-purple">{t('badge')}</span>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
                {t('title').split(' ').map((word, i) => (
                  <span key={i}>
                    {i === t('title').split(' ').length - 1 ? (
                      <span className="gradient-text">{word}</span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                ))}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg sm:text-xl text-slate max-w-xl mx-auto lg:mx-0 mb-8">
                {t('subtitle')}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="max-w-md mx-auto lg:mx-0">
                <WaitlistForm variant="inline" />
                <p className="mt-4 text-sm text-slate/70">{t('ctaSubtext')}</p>
              </div>
            </FadeIn>
          </div>

          {/* Melo Character */}
          <FadeIn delay={0.5} direction="left" className="flex-shrink-0">
            <div className="relative">
              <AnimatedMelo
                state="waving"
                size="xl"
                showSpeechBubble
                speechText={t('meloSays')}
              />

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -z-10 inset-0 scale-150"
              >
                <div className="absolute top-0 left-1/4 w-3 h-3 bg-pink rounded-full opacity-60" />
                <div className="absolute top-1/4 right-0 w-2 h-2 bg-lavender rounded-full opacity-50" />
                <div className="absolute bottom-1/4 left-0 w-4 h-4 bg-mint rounded-full opacity-40" />
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-coral rounded-full opacity-60" />
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-purple/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-purple/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
