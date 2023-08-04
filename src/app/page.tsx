"use client"
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/Homepage/HeroSection';
import Service from '@/components/Homepage/Service';
import AboutUs from '@/components/AboutUs';
import RecentWork from '@/components/RecentWork/page';
import ContactUs from '@/components/ContactUs/page';
import Result from '@/components/Results/page';
import Testimonies from '@/components/Testimonies/page';


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Service />
      <AboutUs />
      <RecentWork />
      <ContactUs />
      <Result />
      <Testimonies />
    </main>
  )
}
