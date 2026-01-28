import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Journey from '@/components/sections/Journey';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="journey">
        <Journey />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="waitlist">
        <CTA />
      </section>
      <Footer />
    </main>
  );
}
