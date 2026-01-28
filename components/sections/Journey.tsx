'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Download, MessageCircle, Users, TrendingUp } from 'lucide-react';
import AnimatedMelo from '@/components/ui/AnimatedMelo';
import FadeIn from '@/components/animations/FadeIn';

const steps = [
  {
    key: 'step1',
    icon: Download,
    meloState: 'welcome' as const,
    color: 'purple',
  },
  {
    key: 'step2',
    icon: MessageCircle,
    meloState: 'waving' as const,
    color: 'coral',
  },
  {
    key: 'step3',
    icon: Users,
    meloState: 'happy' as const,
    color: 'pink',
  },
  {
    key: 'step4',
    icon: TrendingUp,
    meloState: 'love' as const,
    color: 'mint',
  },
];

export default function Journey() {
  const t = useTranslations('journey');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const progressHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-24 bg-gradient-to-b from-cream to-ivory overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              {t('title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-lavender/30 -translate-x-1/2 hidden sm:block">
            <motion.div
              style={{ height: progressHeight }}
              className="w-full bg-gradient-to-b from-purple via-coral to-mint rounded-full"
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <FadeIn
                  key={step.key}
                  delay={0.1 * index}
                  direction={isEven ? 'right' : 'left'}
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-block"
                      >
                        <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-${step.color}/10 mb-4`}>
                          <div className={`w-8 h-8 rounded-full bg-${step.color}/20 flex items-center justify-center`}>
                            <Icon className={`w-4 h-4 text-${step.color}`} />
                          </div>
                          <span className="text-sm font-semibold text-charcoal">
                            {t('step')} {index + 1}
                          </span>
                        </div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-charcoal mb-3">
                        {t(`${step.key}.title`)}
                      </h3>
                      <p className="text-slate max-w-md mx-auto lg:mx-0">
                        {t(`${step.key}.description`)}
                      </p>
                    </div>

                    {/* Center Node */}
                    <motion.div
                      whileInView={{ scale: [0.5, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10 hidden lg:flex"
                    >
                      <div className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-${step.color}/30`}>
                        <span className="text-2xl font-bold text-charcoal">{index + 1}</span>
                      </div>
                    </motion.div>

                    {/* Melo Animation */}
                    <div className="flex-1 flex justify-center">
                      <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <AnimatedMelo state={step.meloState} size="lg" />
                      </motion.div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-40 top-1/4 w-80 h-80 rounded-full border border-lavender/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute -left-20 bottom-1/4 w-60 h-60 rounded-full border border-peach/20"
      />
    </section>
  );
}
