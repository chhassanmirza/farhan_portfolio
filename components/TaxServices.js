'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const forms = [
  {
    number: '1040',
    entity: 'Individual returns',
    summary: 'Federal individual income tax, prepared and e-filed.',
    detail: `The Form 1040 covers all individual income: wages, self-employment, rental income, dividends, capital gains and more. Every supporting schedule — Schedule A (itemized deductions), Schedule B (interest and dividends), Schedule C (self-employment), Schedule D (capital gains) and Schedule E (rental or pass-through income) — is prepared alongside the main return. State returns are filed at the same time. The finished return is reviewed line by line before anything is submitted, and every number is explained in plain language so you understand exactly what was filed and why.`,
  },
  {
    number: '1040NR',
    entity: 'Nonresident returns',
    summary: 'For nonresident aliens with US income or filing needs.',
    detail: `Form 1040NR applies to foreign nationals who earned US-source income — rental income from US property, wages from a US employer, dividends from US companies, or business income effectively connected with a US trade. It also applies to individuals who held a US visa during the year and need to determine their residency status under the substantial presence test. Treaty positions, ITIN applications and FIRPTA withholding situations are all handled as part of the engagement.`,
  },
  {
    number: '1040X',
    entity: 'Amended returns',
    summary: 'Corrections to prior-year filings, handled cleanly.',
    detail: `Form 1040X is used when a prior-year return needs correcting: missed deductions, income reported in the wrong year, a late-arriving K-1, a reclassified expense or an error in filing status. The amended return includes a clear explanation of each change, the revised figures, and the net refund or balance due. If the original return was filed by someone else and you are unsure what was reported, the prior-year return is reviewed first before any amendment is prepared.`,
  },
  {
    number: '1120-S',
    entity: 'S Corporations',
    summary: 'Corporate returns with shareholder K-1s that tie out.',
    detail: `Form 1120-S is the annual return for S corporations. It reports the company's income, deductions, credits and distributions, then allocates each item to shareholders on Schedule K-1 in proportion to their ownership. The K-1s have to tie back to the 1120-S exactly — a common source of IRS notices when they don't. Basis calculations are tracked for each shareholder, because basis determines whether a loss is deductible and whether a distribution is taxable.`,
  },
  {
    number: '1065',
    entity: 'Partnerships',
    summary: 'Partnership returns and partner K-1s, allocations done right.',
    detail: `Form 1065 is the return for partnerships and multi-member LLCs. Income, losses, credits and deductions are reported at the entity level and then allocated to each partner on Schedule K-1 according to the partnership agreement. Special allocations, guaranteed payments, Section 754 elections and partner capital account reconciliation are all handled as part of the return. Outside basis is tracked per partner, which matters every time a distribution is made or a loss is claimed.`,
  },
  {
    number: '1120',
    entity: 'C Corporations',
    summary: 'Corporate income tax, federal and state.',
    detail: `Form 1120 is the federal return for C corporations. It covers all corporate income and deductions, including depreciation schedules, officer compensation, dividend received deductions and net operating loss carryforwards. Estimated tax payment schedules are planned to avoid underpayment penalties. State corporate income tax returns are filed alongside the federal return, with apportionment calculations handled for companies operating in multiple states.`,
  },
];

const extras = [
  {
    title: 'State filings',
    detail: 'State returns prepared alongside the federal filing, including multi-state situations and state-specific schedules.',
  },
  {
    title: 'IRS notices and penalty abatement',
    detail: 'When the IRS writes, a measured and documented response goes back: notice review in plain English, response letters, abatement requests, and follow-up until the matter is closed.',
  },
];

export default function TaxServices() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section tax-services" id="tax">
      <Reveal className="section-head">
        <p className="section-label">Part I · Tax Preparation</p>
        <h2>Every entity, every form.</h2>
        <p className="section-lead">
          The core of the practice is US tax preparation. Each return is prepared,
          reviewed and filed, with every line explained in plain language before
          anything goes to the IRS. Click any card for full detail.
        </p>
      </Reveal>

      <div className="form-grid">
        {forms.map((form) => {
          const isOpen = open === form.number;
          return (
            <div
              key={form.number}
              className={`form-tile ${isOpen ? 'tile-open' : ''}`}
            >
              <div className="form-tile-head">
                <small>Form</small>
                <strong>{form.number}</strong>
              </div>
              <h3>{form.entity}</h3>
              <p className="tile-summary">{form.summary}</p>

              {/* Detail text — hidden via CSS, not unmounted */}
              <p className="tile-detail">{form.detail}</p>

              <button
                className="tile-btn"
                onClick={() => setOpen(isOpen ? null : form.number)}
                aria-expanded={isOpen}
              >
                <span className="tile-icon">{isOpen ? '−' : '+'}</span>
                {isOpen ? 'Close detail' : 'More detail'}
              </button>
            </div>
          );
        })}
      </div>

      <div className="tax-extras">
        {extras.map((e, i) => (
          <Reveal key={e.title} className="tax-extra" delay={i * 80}>
            <h3>{e.title}</h3>
            <p>{e.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
