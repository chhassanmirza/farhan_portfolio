'use client';

import { useState } from 'react';

const links = [
  ['Tax Preparation', 'tax'],
  ['Bookkeeping', 'bookkeeping'],
  ['Engagements', 'engagements'],
  ['Reviews', 'reviews'],
  ['Contact', 'contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Farhan Malik Khokhar homepage">
        <span className="brand-seal" aria-hidden="true">FK</span>
        <span className="brand-name">
          Farhan Malik Khokhar
          <small>Chartered Accountant</small>
          <small>US Tax Consultant &amp; Bookkeeping Expert</small>
        </span>
      </a>
      <button type="button" className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle navigation">
        <span /><span />
      </button>
      <nav className={`site-nav ${open ? 'open' : ''}`}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="https://www.upwork.com/freelancers/farhank59" target="_blank" rel="noreferrer">Hire on Upwork</a>
      </nav>
    </header>
  );
}
