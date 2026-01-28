'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle, BookHeart, Heart } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import FadeIn from '@/components/animations/FadeIn';
import ScrollReveal, { ScrollRevealItem } from '@/components/animations/ScrollReveal';

const features = [
  {
    key: 'coaching',
    icon: MessageCircle,
    gradient: 'from-purple/20 to-lavender/30',
    iconBg: 'bg-purple/20',
    iconColor: 'text-purple',
  },
  {
    key: 'journal',
    icon: BookHeart,
    gradient: 'from-coral/20 to-peach/30',
    iconBg: 'bg-coral/20',
    iconColor: 'text-coral',
  },
  {
    key: 'exercises',
    icon: Heart,
    gradient: 'from-pink/20 to-lavender/30',
    iconBg: 'bg-pink/20',
    iconColor: 'text-pink',
  },
];

export default function Features() {
  const t = useTranslations('features');

  return (
    <section className="relative py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Features Grid - Bento Style */}
        <ScrollReveal staggerChildren={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollRevealItem key={feature.key}>
                  <GlassCard className={`h-full bg-gradient-to-br ${feature.gradient}`}>
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6`}
                      >
                        <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-charcoal mb-3">
                        {t(`${feature.key}.title`)}
                      </h3>
                      <p className="text-slate flex-1">
                        {t(`${feature.key}.description`)}
                      </p>

                      {/* Decorative element */}
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                        className={`h-1 rounded-full ${feature.iconBg} mt-6`}
                      />
                    </div>
                  </GlassCard>
                </ScrollRevealItem>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Decorative elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-10 w-20 h-20 rounded-full bg-lavender/20 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-peach/20 blur-2xl"
        />
      </div>
    </section>
  );
}
