'use client';

import { useEffect, useState } from 'react';

/*
 * Signature element: a ledger that reconciles itself.
 * Entries post one by one, totals draw the accountant's
 * double rule, the balance lands on 0.00, and a red
 * rubber stamp closes the books.
 */

const entries = [
  ['01', 'Uncategorized transactions found', '12,480.00', ''],
  ['02', 'Categorized and booked', '', '12,480.00'],
  ['03', 'Bank and card statements', '86,214.37', ''],
  ['04', 'Reconciled to the penny', '', '86,214.37'],
  ['05', 'Federal and state returns', 'Filed', 'On time'],
];

const stats = [
  ['210', 'Engagements completed'],
  ['96%', 'Job Success Score'],
  ['4.8/5', 'From 107 client reviews'],
  ['Top Rated', 'Upwork talent badge'],
];

export default function HeroLedger() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setStage(entries.length + 3);
      return undefined;
    }
    const timers = [];
    /* stages: 1..5 rows, 6 totals, 7 balance line, 8 stamp */
    for (let i = 1; i <= entries.length + 3; i += 1) {
      timers.push(window.setTimeout(() => setStage(i), 500 + i * 340));
    }
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  const totalsOn = stage >= entries.length + 1;
  const balanceOn = stage >= entries.length + 2;
  const stampOn = stage >= entries.length + 3;

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow reveal is-visible">IRS-Registered Tax Return Preparer · PTIN Holder</p>

        <h1>
          Everything
          <em> reconciles.</em>
        </h1>

        <p className="hero-lead">
          Bookkeeping, US federal and state tax preparation, and financial modeling
          for businesses that want clean books and zero surprises. 210 engagements
          delivered on Upwork, rated 4.8 by 107 clients.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="https://www.upwork.com/freelancers/farhank59"
            target="_blank"
            rel="noreferrer"
          >
            Start an engagement
          </a>
          <a className="btn btn-ghost" href="#reviews">Read client reviews</a>
        </div>

        <dl className="hero-stats">
          {stats.map(([value, label]) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-ledger" aria-label="Illustration: a general ledger being reconciled">
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
    </section>
  );
}
