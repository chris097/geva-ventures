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
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>Yabacon: Africa&apos;s Most Inclusive Tech Community</title>
                <meta name="description" content="Privacy Policy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

             <link rel="icon" href="" />
      </Head>
    <main>
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
    </>
  )
}
