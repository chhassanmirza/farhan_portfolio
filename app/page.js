'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import HeroForms from '../components/HeroForms';
import TaxServices from '../components/TaxServices';
import Bookkeeping from '../components/Bookkeeping';
import Engagements from '../components/Engagements';
import Reviews from '../components/Reviews';
import Process from '../components/Process';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Header />
      <HeroForms />
      <TaxServices />
      <Bookkeeping />
      <Engagements />
      <Reviews />
      <Process />
      <Contact />
    </main>
  );
}
