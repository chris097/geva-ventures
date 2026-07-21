"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer/page';
import PhoneIcon from '@/public/svgs/PhoneIcon';
import EmailIcon from '@/public/svgs/EmailIcon';
import { FaLocationDot } from 'react-icons/fa6';
import { Reveal } from '@/components/utils/Reveal';
import Image from 'next/image';
import heroImg from '@/public/images/hero.png';

const offices = [
  { name: 'Head Office — Port Harcourt', address: 'No. 1 Chief Val Close off Timothy Lane, Rumuola, Port Harcourt, Rivers State.' },
  { name: 'Lagos Office', address: '3rd Floor Nurses House, Churchgate Street, Victoria Island, Lagos.' },
  { name: 'Port Harcourt Office', address: '12 Ohiaimini Road off Rumuola Road, Port Harcourt, Rivers State.' },
  { name: 'Abuja Office', address: 'Suite 9D Lake City Plaza, Oladipo Diva Way, Gudu District, Abuja.' },
];

const CONTACT_EMAIL = 'info@gevacglobalservicesltd.com';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request from ${form.name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className='bg-slate-950'>
      <Header />
      <div className='relative h-[420px] lg:h-[500px] overflow-hidden flex items-center'>
        <Image src={heroImg} alt='Contact GEVA Ventures' className='absolute inset-0 w-full h-full object-cover object-center' priority />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40' />
        <div className='absolute inset-0 opacity-10' style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className='relative z-10 w-[90%] mx-auto max-w-6xl mt-16'>
          <Reveal>
            <span className='inline-block text-accent text-xs font-black tracking-[0.5em] uppercase mb-5 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full'>
              Get In Touch
            </span>
          </Reveal>
          <Reveal>
            <h1 className='font-tillitium font-black text-white text-5xl lg:text-7xl leading-none tracking-tighter'>
              CONTACT <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300'>US.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className='text-slate-400 mt-5 max-w-xl text-lg leading-relaxed'>
              Tell us about your project and our team will respond with a quotation after a site inspection.
            </p>
          </Reveal>
        </div>
      </div>

      <div className='mx-auto grid w-[90%] max-w-6xl gap-10 py-16 lg:grid-cols-[1.1fr_1fr]'>
        <Reveal>
          <form onSubmit={handleSubmit} className='rounded-[2rem] bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 lg:p-10 shadow-2xl h-full'>
            <h2 className='text-3xl font-tillitium font-black text-white mb-2'>Send Us A Message</h2>
            <p className='text-slate-400 text-sm mb-8'>We typically reply within 24 hours.</p>
            
            <div className='grid gap-6 sm:grid-cols-2'>
              <div className='sm:col-span-1'>
                <label htmlFor='name' className='text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block'>Full Name</label>
                <input id='name' name='name' required value={form.name} onChange={handleChange} className='w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all' placeholder='John Doe' />
              </div>
              <div className='sm:col-span-1'>
                <label htmlFor='phone' className='text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block'>Phone Number</label>
                <input id='phone' name='phone' required value={form.phone} onChange={handleChange} className='w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all' placeholder='+234...' />
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='email' className='text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block'>Email Address</label>
                <input id='email' name='email' type='email' required value={form.email} onChange={handleChange} className='w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all' placeholder='you@company.com' />
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='message' className='text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block'>Project Details</label>
                <textarea id='message' name='message' required rows={5} value={form.message} onChange={handleChange} className='w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none' placeholder='Tell us about the location, capacity, or specific service you need...' />
              </div>
            </div>
            <button type='submit' className='mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-xl shadow-primary/20 hover:scale-105 hover:shadow-primary/40 transition-all duration-300'>
              Send Message <span>→</span>
            </button>
          </form>
        </Reveal>

        <div className='space-y-6'>
          <Reveal>
            <div className='rounded-[2rem] bg-gradient-to-br from-primary to-blue-600 p-8 text-white shadow-2xl shadow-primary/20 border border-white/10'>
              <div className='flex items-center gap-5'>
                <div className='w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20'>
                  <PhoneIcon fillColor='#ffffff' width='20px' height='20px' />
                </div>
                <div>
                  <p className='text-xs font-black uppercase tracking-[0.2em] text-white/70'>Call Us</p>
                  <p className='text-lg font-bold mt-1'>+2348035802938</p>
                </div>
              </div>
              <div className='mt-8 flex items-center gap-5'>
                <div className='w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20'>
                  <EmailIcon fillColor='#ffffff' width='20px' height='20px' />
                </div>
                <div>
                  <p className='text-xs font-black uppercase tracking-[0.2em] text-white/70'>Email Us</p>
                  <p className='text-lg font-bold mt-1'>{CONTACT_EMAIL}</p>
                </div>
              </div>
              <div className='mt-8 pt-6 border-t border-white/20'>
                <p className='text-sm text-white/80 font-medium'>Office Hours: Mon – Sat, 9:00am – 6:00pm</p>
              </div>
            </div>
          </Reveal>

          {offices.map((office) => (
            <Reveal key={office.name}>
              <div className='flex items-start gap-5 rounded-2xl bg-slate-900 border border-white/5 p-6 hover:border-white/20 transition-colors'>
                <span className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-950 border border-white/5 text-primary shadow-inner'>
                  <FaLocationDot size={18} />
                </span>
                <div>
                  <p className='text-base font-tillitium font-black text-white'>{office.name}</p>
                  <p className='mt-1.5 text-sm text-slate-400 leading-relaxed'>{office.address}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Direct Connect Section: Emails, WhatsApp, QR */}
      <div className='bg-slate-950 py-16 lg:py-24 mt-8'>
        <div className='w-[90%] max-w-6xl mx-auto'>
          <Reveal>
            <div className='text-center mb-10'>
              <h2 className='font-tillitium font-black text-white text-3xl lg:text-4xl'>Direct Contacts</h2>
              <p className='text-slate-400 mt-3 text-sm'>Connect with our management team or reach out instantly via WhatsApp.</p>
            </div>
          </Reveal>
          <div className='grid lg:grid-cols-3 gap-6'>
            {/* Emails Card */}
            <Reveal>
              <div className='bg-slate-900 border border-white/8 rounded-3xl p-8 hover:border-white/15 transition-all duration-300 h-full'>
                <p className='text-xs font-black tracking-[0.4em] uppercase text-slate-500 mb-6'>Direct Emails</p>
                <div className='space-y-4'>
                  <a href="mailto:vincent@gevacglobalservicesltd.com" className='group block'>
                    <p className='text-white font-bold text-sm group-hover:text-primary transition-colors'>Vincent</p>
                    <p className='text-slate-400 text-xs'>vincent@gevacglobalservicesltd.com</p>
                  </a>
                  <a href="mailto:kenneth@gevacglobalservicesltd.com" className='group block'>
                    <p className='text-white font-bold text-sm group-hover:text-primary transition-colors'>Kenneth</p>
                    <p className='text-slate-400 text-xs'>kenneth@gevacglobalservicesltd.com</p>
                  </a>
                  <a href="mailto:info@gevacglobalservicesltd.com" className='group block'>
                    <p className='text-white font-bold text-sm group-hover:text-primary transition-colors'>General Info</p>
                    <p className='text-slate-400 text-xs'>info@gevacglobalservicesltd.com</p>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* WhatsApp Card */}
            <Reveal>
              <div className='bg-gradient-to-br from-[#075E54]/40 to-slate-900 border border-[#25D366]/20 rounded-3xl p-8 hover:border-[#25D366]/40 transition-all duration-300 flex flex-col h-full'>
                <p className='text-xs font-black tracking-[0.4em] uppercase text-[#25D366]/70 mb-4'>WhatsApp Support</p>
                <div className='flex-1 flex flex-col justify-center items-center text-center'>
                  <div className='w-14 h-14 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-3'>
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#25D366]">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.441-1.273.6-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                    </svg>
                  </div>
                  <h4 className='text-white font-bold text-lg mb-1'>Chat with us</h4>
                  <p className='text-slate-400 text-sm mb-4'>Available for urgent technical support and quotes.</p>
                  <a href="https://wa.me/2348035802938" target="_blank" rel="noreferrer" className='bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-bold py-2.5 px-6 rounded-full transition-colors w-full'>
                    Start Chat
                  </a>
                </div>
              </div>
            </Reveal>

            {/* QR Code Card */}
            <Reveal>
              <div className='bg-slate-900 border border-white/8 rounded-3xl p-8 hover:border-white/15 transition-all duration-300 flex flex-col items-center justify-center text-center h-full'>
                <p className='text-xs font-black tracking-[0.4em] uppercase text-slate-500 mb-4 w-full text-left'>Scan to Connect</p>
                <div className='w-28 h-28 bg-white rounded-xl p-2 mb-4 flex items-center justify-center overflow-hidden'>
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://geva-ventures.com" alt="QR Code" className='w-full h-full object-contain' />
                </div>
                <h4 className='text-white font-bold text-sm'>Save our Contact</h4>
                <p className='text-slate-500 text-xs mt-1'>Scan with your phone camera</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ContactPage;
