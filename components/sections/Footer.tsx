'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import AnimatedMelo from '@/components/ui/AnimatedMelo';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative py-16 bg-charcoal text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-purple blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-coral blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo & Melo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <AnimatedMelo state="happy" size="sm" />
              <span className="text-2xl font-bold">Relate & Grow</span>
            </div>
            <p className="text-white/60">{t('tagline')}</p>
          </motion.div>

          {/* Language Switcher */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <LanguageSwitcher />
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-white/10" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-sm text-white/40"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-coral fill-coral" />
            </motion.span>
            <span>• {t('copyright')}</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
