'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Send, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WaitlistFormProps {
  className?: string;
  variant?: 'inline' | 'stacked';
}

export default function WaitlistForm({ className, variant = 'inline' }: WaitlistFormProps) {
  const t = useTranslations('form');
  const tHero = useTranslations('hero');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('form-name', 'waitlist');
      formData.append('email', email);

      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const isInline = variant === 'inline';

  return (
    <div className={cn('w-full', className)}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-3 p-4 bg-mint/30 rounded-2xl"
          >
            <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center">
              <Check className="w-5 h-5 text-charcoal" />
            </div>
            <p className="font-medium text-charcoal">{t('success')}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            name="waitlist"
            method="POST"
            className={cn(
              'flex gap-3',
              isInline ? 'flex-row' : 'flex-col'
            )}
          >
            {/* Netlify form hidden inputs */}
            <input type="hidden" name="form-name" value="waitlist" />
            <input type="hidden" name="bot-field" />

            <div className="flex-1 relative">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={tHero('emailPlaceholder')}
                required
                disabled={status === 'loading'}
                className={cn(
                  'w-full px-6 py-4 rounded-full',
                  'bg-white/80 backdrop-blur-sm',
                  'border-2 border-lavender/50',
                  'focus:border-purple focus:outline-none',
                  'transition-all duration-300',
                  'placeholder:text-slate/60',
                  'text-charcoal font-medium',
                  'disabled:opacity-60'
                )}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'px-8 py-4 rounded-full',
                'bg-purple text-white font-semibold',
                'shadow-lg shadow-purple/30',
                'hover:bg-purple-dark hover:shadow-purple/40',
                'transition-all duration-300',
                'flex items-center justify-center gap-2',
                'disabled:opacity-70',
                isInline ? 'whitespace-nowrap' : 'w-full'
              )}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t('submitting')}</span>
                </>
              ) : (
                <>
                  <span>{t('submit')}</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-center text-coral text-sm"
        >
          {t('error')}
        </motion.p>
      )}
    </div>
  );
}
