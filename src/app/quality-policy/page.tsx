import React from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/Footer/page';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Quality Policy | GEVA VENTURES',
  description: 'The quality policy of GEVA VENTURES, a subsidiary of Gevac Global Services Ltd.',
};

const commitments = [
  'Operation and maintenance of a safe system of work.',
  'Consistent achievement of the specified quality.',
  'Economy of manufacture and construction activities.',
  'Provision of training and instruction planned to suit identified needs.',
  'Adherence to programs with best practices and compliance with all applicable requirements.',
];

const QualityPolicy = () => {
  return (
    <main>
      <Header />
      <div className='bg-section py-16 text-center'>
        <h1 className='text-4xl font-semibold text-primary sm:text-5xl'>Quality Policy</h1>
        <p className='mx-auto mt-3 max-w-2xl text-lg text-muted'>Please read our quality policy carefully before engaging our services.</p>
      </div>
      <div className='mx-auto w-[90%] max-w-4xl py-14'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-accent'>Updated August 7th, 2023</p>
        <div className='mt-6 space-y-4 text-lg leading-relaxed text-ink'>
          <p>Every employee of Gevac Global Services Ltd (GGS) shall ensure the satisfaction of our customers by providing them with the best value in every product and service that carries our name.</p>
          <p>GGS will create and retain satisfied customers, offering for sale products and services which respond to customer expectations; our customers will be supplied with products and services of a given quality, and at a price which reflects value for money.</p>
          <p>The policy of the company, for the manufacture and construction of the work and the service it provides, is clearly defined and meets the requirement of quality.</p>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-bold text-primary'>GGS places particular emphasis on:</h2>
          <ul className='mt-6 space-y-4'>
            {commitments.map((item) => (
              <li key={item} className='flex items-start gap-4'>
                <span className='mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-accent' />
                <span className='text-lg leading-relaxed text-ink'>{item}</span>
              </li>
            ))}
          </ul>
          <p className='mt-8 text-lg leading-relaxed text-ink'>These continual practices show that our internal requirements are being met, while maintaining our clients&apos; requirements for examination, testing, checking and certification, all within project specifications and schedules.</p>
        </div>
        <div className='mt-14 rounded-2xl bg-section p-8'>
          <h3 className='text-xl font-bold text-ink'>Contact Us</h3>
          <p className='mt-2 text-base text-muted'>Don&apos;t hesitate to contact us if you have any questions.</p>
          <p className='mt-1 text-base text-muted'>Via Email: info@gevacglobalservicesltd.com</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default QualityPolicy;
