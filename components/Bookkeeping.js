'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const entries = [
  ['01', 'Uncategorized transactions found', '12,480.00', ''],
  ['02', 'Categorized and booked', '', '12,480.00'],
  ['03', 'Bank and card statements', '86,214.37', ''],
  ['04', 'Reconciled to the penny', '', '86,214.37'],
];

const services = [
  ['QuickBooks Online and Xero', 'Setup, cleanup and ongoing bookkeeping in both platforms, with accountant-level access and nothing moved without documentation.'],
  ['Reconciliation and monthly close', 'Bank and credit card accounts reconciled every month, discrepancies chased down to zero, books closed on a schedule.'],
  ['Financial statements', 'P&L, Balance Sheet and Cash Flow delivered clean, so the tax return at year end is a formality instead of an archaeology project.'],
  ['Financial modeling', 'Forecasted three-statement models that tie out, business valuation, and scenario analysis for decisions, lenders and buyers.'],
];

export default function Bookkeeping() {
  const ref = useRef(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setStage(entries.length + 3);
      return undefined;
    }
    let timers = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        for (let i = 1; i <= entries.length + 3; i += 1) {
          timers.push(window.setTimeout(() => setStage(i), 200 + i * 340));
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const totalsOn = stage >= entries.length + 1;
  const balanceOn = stage >= entries.length + 2;
  const stampOn = stage >= entries.length + 3;

  return (
    <section className="section bookkeeping" id="bookkeeping">
      <Reveal className="section-head">
        <p className="section-label">Part II · Bookkeeping &amp; Accounting</p>
        <h2>Clean filings start with <em>clean books.</em></h2>
        <p className="section-lead">
          Tax season is only stressful when the books are behind. Year-round
          bookkeeping keeps every account reconciled, so the numbers on the
          return are already proven before the form is opened.
        </p>
      </Reveal>

      <div className="bookkeeping-layout">
        <div className="bookkeeping-list">
          {services.map(([title, detail], i) => (
            <Reveal key={title} className="bookkeeping-row" delay={i * 70}>
              <h3>{title}</h3>
              <p>{detail}</p>
            </Reveal>
          ))}
        </div>

        <div className="bookkeeping-ledger" ref={ref}>
          <div className="ledger-card">
            <div className="ledger-head">
              <span>General Ledger</span>
              <span>Period close</span>
            </div>
            <div className="ledger-columns">
              <span>Ref</span>
              <span>Description</span>
              <span>Debit</span>
              <span>Credit</span>
            </div>
            {entries.map((row, index) => (
              <div key={row[0]} className={`ledger-row ${stage > index ? 'posted' : ''}`}>
                <span className="l-ref">{row[0]}</span>
                <span className="l-desc">{row[1]}</span>
                <span className="l-num">{row[2]}</span>
                <span className="l-num">{row[3]}</span>
              </div>
            ))}
            <div className={`ledger-totals ${totalsOn ? 'posted' : ''}`}>
              <span className="l-ref" />
              <span className="l-desc">Totals</span>
              <span className="l-num">98,694.37</span>
              <span className="l-num">98,694.37</span>
            </div>
            <div className={`ledger-balance ${balanceOn ? 'posted' : ''}`}>
              <span>Out of balance</span>
              <strong>0.00</strong>
            </div>
            <div className={`stamp ${stampOn ? 'stamped' : ''}`} aria-hidden="true">
              Reconciled
            </div>
          </div>
          <p className="ledger-note">Illustrative figures. Client numbers stay confidential.</p>
        </div>
      </div>
    </section>
  );
}
