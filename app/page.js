'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import HeroLedger from '../components/HeroLedger';
import Schedules from '../components/Schedules';
import Engagements from '../components/Engagements';
import Reviews from '../components/Reviews';
import Process from '../components/Process';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Header />
      <HeroLedger />
      <Schedules />
      <Engagements />
      <Reviews />
      <Process />
      <Contact />
    </main>
  );
}
