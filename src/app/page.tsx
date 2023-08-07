"use client";
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/Homepage/HeroSection';
import Service from '@/components/Homepage/Service';
import AboutUs from '@/components/AboutUs';
import RecentWork from '@/components/RecentWork/page';
import ContactUs from '@/components/ContactUs/page';
import Result from '@/components/Results/page';
import Testimonies from '@/components/Testimonies/page';
import Faq from '@/components/Faq/page';
import Footer from '@/components/Footer/page';
import Team from '@/components/Homepage/Team';
import CookiesPage from '@/components/utils/Cookies';


export default function Home() {
  return (
    <main>
      <CookiesPage />
      <Header />
      <HeroSection />
      <Service />
      <AboutUs />
      <RecentWork />
      <ContactUs />
      <Team />
      <Result />
      <Testimonies />
      <Faq />
      <Footer />
    </main>
  );
};
