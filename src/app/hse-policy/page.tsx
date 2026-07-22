import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer/page';

export const metadata: Metadata = {
  title: 'Health, Safety & Employee Policy | GEVA VENTURES',
  description: 'The health, safety and employee policy of GEVA VENTURES, a subsidiary of Gevac Global Services Ltd.',
};

const pledges = [
  'Strive to achieve the goal of zero accidents and injuries.',
  'Comply with all applicable safety and health requirements.',
  'Train all employees in safe work practices and procedures.',
  'Provide employees with necessary personal protective equipment and train them to use and care for it properly.',
  'Enforce company safety and health rules and make employees follow the rules as a condition of employment.',
  'Investigate accidents to determine the cause and prevent similar accidents.',
];

const responsibilities = [
  { role: 'Management', description: 'Accountable for preventing workplace injuries and illness. Management stays informed about workplace safety and health hazards and regularly reviews the company’s safety and health program.' },
  { role: 'Supervisors', description: 'Responsible for supervising and training workers in safe work practices, enforcing company rules and ensuring employees follow safe practices during their work.' },
  { role: 'Employees', description: 'Expected to participate in safety and health program activities, including immediately reporting hazards, unsafe work practices and accidents to supervisors or a safety committee representative, wearing required personal protective equipment, and supporting safety committee activities.' },
];

const HSEPOLICY = () => {
  return (
    <main>
      <Header />
      <div className='bg-section py-16 text-center'>
        <h1 className='text-3xl sm:text-4xl font-semibold text-primary lg:text-5xl'>Health, Safety & Employee Policy</h1>
        <p className='mx-auto mt-3 max-w-2xl text-lg text-muted'>Please read our HSE policy carefully before engaging our services.</p>
      </div>
      <div className='mx-auto w-[90%] max-w-4xl py-14'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-accent'>Updated August 7th, 2023</p>
        <p className='mt-6 text-lg leading-relaxed text-ink'>The health and safety of our employees is the highest priority for GEVA VENTURES, a subsidiary of Gevac Global Services Ltd. No employee will be required to do work they consider unsafe; we comply with all applicable safety requirements and maintain occupational standards that equal or exceed industry best practices. Our safety committee, consisting of management and labour representatives, identifies hazards, removes obstacles to accident prevention, and evaluates our efforts to achieve an injury-free workplace.</p>

        <div className='mt-10'>
          <h2 className='text-xl sm:text-2xl font-bold text-primary'>GEVA VENTURES pledges to:</h2>
          <ul className='mt-6 space-y-4'>
            {pledges.map((item) => (
              <li key={item} className='flex items-start gap-4'>
                <span className='mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-accent' />
                <span className='text-lg leading-relaxed text-ink'>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-12'>
          <h2 className='text-xl font-bold uppercase text-primary'>Management, supervisors and all employees share responsibility for a safe and healthy workplace</h2>
          <div className='mt-6 space-y-6'>
            {responsibilities.map((item) => (
              <div key={item.role} className='rounded-2xl border border-slate-200 p-6'>
                <p className='text-lg font-semibold text-primary'>{item.role}</p>
                <p className='mt-2 text-base leading-relaxed text-ink'>{item.description}</p>
              </div>
            ))}
          </div>
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

export default HSEPOLICY;
