'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath || `/${newLocale}`);
  };

  return (
    <div className="flex items-center gap-1 p-1 bg-white/50 backdrop-blur-sm rounded-full border border-lavender/30">
      {['fr', 'en'].map((lang) => (
        <motion.button
          key={lang}
          onClick={() => switchLocale(lang)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300',
            locale === lang
              ? 'bg-purple text-white shadow-sm'
              : 'text-charcoal hover:bg-lavender/30'
          )}
        >
          {lang.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
}
