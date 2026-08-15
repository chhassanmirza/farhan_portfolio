'use client';

import FormCard from './FormCard';

const stats = [
  ['210', 'Engagements completed'],
  ['96%', 'Job Success Score'],
  ['4.8/5', 'From 107 client reviews'],
  ['Top Rated', 'Upwork talent badge'],
];

export default function HeroForms() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">IRS-Registered Tax Return Preparer · PTIN Holder</p>

        <h1>
          US taxes, <em>filed right.</em>
          <span>Books kept clean.</span>
        </h1>

        <p className="hero-lead">
          Federal and state returns for individuals, S corporations, partnerships
          and C corporations, backed by bookkeeping in QuickBooks Online and Xero.
          210 engagements delivered on Upwork, rated 4.8 by 107 clients.
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
          <a className="btn btn-ghost" href="#bookkeeping">See the bookkeeping</a>
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

      <div className="hero-forms" aria-label="Stylized examples of US tax forms prepared: 1040, 1120-S and 1065">
        <div className="form-stack">
          <div className="form-slot slot-back">
            <FormCard number="1065" year="2025" title="U.S. Return of Partnership Income" subtitle="Department of the Treasury · Internal Revenue Service" />
          </div>
          <div className="form-slot slot-mid">
            <FormCard number="1120-S" year="2025" title="U.S. Income Tax Return for an S Corporation" subtitle="Department of the Treasury · Internal Revenue Service" />
          </div>
          <div className="form-slot slot-front">
            <FormCard number="1040" year="2025" title="U.S. Individual Income Tax Return" subtitle="Department of the Treasury · Internal Revenue Service" />
          </div>
        </div>
        <p className="hero-forms-note">Stylized form headers. Actual filings prepared per IRS specifications.</p>
      </div>
    </section>
  );
}
