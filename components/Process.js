import Reveal from './Reveal';

const steps = [
  ['1', 'Scope', 'A short call or message thread to understand the entity type, the state of the books and the deadline that matters.'],
  ['2', 'Access', 'Accountant access to QuickBooks Online or Xero, bank statements and prior returns. Nothing moves without documentation.'],
  ['3', 'Clean up', 'Transactions categorized, accounts reconciled, discrepancies chased down to zero. This is where most engagements are won.'],
  ['4', 'File & deliver', 'Returns prepared and filed, statements delivered, models handed over. Everything explained in plain language.'],
  ['5', 'Stay current', 'Monthly close, quarterly check-ins or year-round support, so next tax season is quiet.'],
];

const tools = [
  'QuickBooks Online',
  'Xero',
  'Microsoft Excel',
  'Google Sheets',
  'IRS e-file systems',
  'Drake / tax software',
];

export default function Process() {
  return (
    <section className="section process" id="process">
      <Reveal className="section-head">
        <p className="section-label">Line 4 · How an engagement runs</p>
        <h2>Line by line, in order.</h2>
      </Reveal>

      <div className="process-list">
        {steps.map(([n, title, detail], i) => (
          <Reveal key={title} className="process-row" delay={i * 70}>
            <span className="p-line">Line {n}</span>
            <h3>{title}</h3>
            <p>{detail}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="tools-strip">
        <span className="tools-label">Working tools</span>
        <div className="tools-list">
          {tools.map((t) => <span key={t}>{t}</span>)}
        </div>
      </Reveal>
    </section>
  );
}
