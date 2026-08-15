import Reveal from './Reveal';

const schedules = [
  {
    letter: 'A',
    title: 'Bookkeeping',
    line: 'Books kept current, closed monthly and reconciled to the penny.',
    items: [
      'QuickBooks Online and Xero setup',
      'Chart of accounts built or rebuilt',
      'Bank and credit card reconciliation',
      'Monthly close and catch-up work',
      'P&L, Balance Sheet and Cash Flow statements',
    ],
  },
  {
    letter: 'B',
    title: 'US Tax Preparation',
    line: 'Federal and state returns prepared and filed, individual and business.',
    items: [
      'Individual: Form 1040, 1040NR, 1040X',
      'S Corporation: Form 1120-S',
      'Partnership: Form 1065',
      'C Corporation: Form 1120',
      'All supporting schedules and state filings',
    ],
  },
  {
    letter: 'C',
    title: 'IRS Notices & Penalties',
    line: 'When the IRS writes, a measured and documented response goes back.',
    items: [
      'Notice review and plain-English explanation',
      'Response letters and documentation',
      'Penalty abatement requests',
      'Follow-up until the matter is closed',
    ],
  },
  {
    letter: 'D',
    title: 'Financial Modeling',
    line: 'Forward-looking numbers for decisions, lenders and buyers.',
    items: [
      'Forecasted P&L, Balance Sheet and Cash Flow',
      'Three-statement models that tie out',
      'Business valuation',
      'Scenario and sensitivity analysis',
    ],
  },
];

export default function Schedules() {
  return (
    <section className="section schedules" id="services">
      <Reveal className="section-head">
        <p className="section-label">Line 1 · Services</p>
        <h2>Filed under four schedules.</h2>
        <p className="section-lead">
          The same structure the IRS uses, because that is the world this work lives in.
          Every engagement falls under one of these, or several working together.
        </p>
      </Reveal>

      <div className="schedule-grid">
        {schedules.map((s, i) => (
          <Reveal key={s.letter} className="schedule-card" delay={i * 80}>
            <div className="schedule-top">
              <span className="schedule-letter">{s.letter}</span>
              <span className="schedule-tag">Schedule {s.letter}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.line}</p>
            <ul>
              {s.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
