import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer/page';
import Faq from '@/components/Faq/page';

export const metadata: Metadata = {
  title: 'FAQ | GEVA VENTURES',
  description: 'Frequently asked questions about GEVA VENTURES elevator, escalator and automatic door services.',
};

const FaqPage = () => {
  return (
    <main>
      <Header />
      <Faq />
      <Footer />
    </main>
  );
};

export default FaqPage;
