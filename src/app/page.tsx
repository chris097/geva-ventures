"use client"
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/Homepage/HeroSection';
import Service from '@/components/Homepage/Service';
import AboutUs from '@/components/AboutUs';


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Service />
      <AboutUs />
    </main>
  )
}
