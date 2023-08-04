"use client"
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/Homepage/HeroSection';
import Service from '@/components/Homepage/Service';


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Service />
    </main>
  )
}
