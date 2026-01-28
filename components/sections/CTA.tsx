'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import AnimatedMelo from '@/components/ui/AnimatedMelo';
import WaitlistForm from '@/components/ui/WaitlistForm';
import FadeIn from '@/components/animations/FadeIn';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-lavender/20 to-peach/10" />

      {/* Animated background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-purple/10 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-peach/20 to-transparent blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Melo */}
            <FadeIn direction="right" className="flex-shrink-0">
              <AnimatedMelo state="love" size="xl" />
            </FadeIn>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <FadeIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
                  {t('title')}
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg text-slate mb-8">
                  {t('subtitle')}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <WaitlistForm variant="stacked" className="max-w-md mx-auto lg:mx-0" />
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-sm text-slate/70">
                  <Shield className="w-4 h-4" />
                  <span>{t('privacy')}</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
