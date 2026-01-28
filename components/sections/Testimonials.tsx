'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import FadeIn from '@/components/animations/FadeIn';

const testimonialKeys = ['quote1', 'quote2', 'quote3'];

const avatarGradients = [
  'from-purple to-lavender',
  'from-coral to-pink',
  'from-mint to-lavender',
];

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialKeys.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonialKeys.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonialKeys.length) % testimonialKeys.length);

  return (
    <section className="relative py-24 bg-gradient-to-b from-ivory to-cream overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              {t('title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <GlassCard hover={false} className="relative py-12 px-8 md:px-16">
                {/* Quote icon */}
                <div className="absolute top-6 left-6 opacity-20">
                  <Quote className="w-16 h-16 text-purple" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Avatar */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="mx-auto mb-8"
                  >
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${avatarGradients[current]} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                      {t(`${testimonialKeys[current]}.author`).charAt(0)}
                    </div>
                  </motion.div>

                  {/* Quote */}
                  <p className="text-xl md:text-2xl text-charcoal font-medium mb-6 leading-relaxed">
                    &ldquo;{t(`${testimonialKeys[current]}.text`)}&rdquo;
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-bold text-charcoal">
                      {t(`${testimonialKeys[current]}.author`)}
                    </p>
                    <p className="text-sm text-slate">
                      {t(`${testimonialKeys[current]}.role`)}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal hover:bg-lavender/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialKeys.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-purple w-8'
                      : 'bg-lavender hover:bg-purple/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal hover:bg-lavender/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative hearts */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-20 text-4xl opacity-20"
      >
        💕
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 left-16 text-3xl opacity-20"
      >
        💗
      </motion.div>
    </section>
  );
}
