import Reveal from './Reveal';

const forms = [
  ['1040', 'Individual returns', 'Federal individual income tax, prepared and e-filed.'],
  ['1040NR', 'Nonresident returns', 'For nonresident aliens with US income or filing needs.'],
  ['1040X', 'Amended returns', 'Corrections to prior-year filings, handled cleanly.'],
  ['1120-S', 'S Corporations', 'Corporate returns with shareholder K-1s that tie out.'],
  ['1065', 'Partnerships', 'Partnership returns and partner K-1s, allocations done right.'],
  ['1120', 'C Corporations', 'Corporate income tax, federal and state.'],
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
  return (
    <section className="section tax-services" id="tax">
      <Reveal className="section-head">
        <p className="section-label">Part I · Tax Preparation</p>
        <h2>Every entity, every form.</h2>
        <p className="section-lead">
          The core of the practice is US tax preparation. Each return below is
          prepared, reviewed and filed, with every line explained in plain language
          before anything goes to the IRS.
        </p>
      </Reveal>

      <div className="form-grid">
        {forms.map(([number, entity, detail], i) => (
          <Reveal key={number} className="form-tile" delay={i * 60}>
            <div className="form-tile-head">
              <small>Form</small>
              <strong>{number}</strong>
            </div>
            <h3>{entity}</h3>
            <p>{detail}</p>
          </Reveal>
        ))}
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
