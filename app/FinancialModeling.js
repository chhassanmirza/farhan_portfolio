import Reveal from './Reveal';

const types = [
  {
    title: '3-Statement Model',
    description:
      'Income statement, balance sheet and cash flow built to tie out perfectly. The foundation for every other model type and the first thing any lender or acquirer will ask for.',
    query: 'financial statement model excel spreadsheet',
  },
  {
    title: 'Forecasted P&L',
    description:
      'Revenue and expense projections built from real drivers: units, pricing, headcount, margins. Shows where the business is headed and what levers move the outcome.',
    query: 'profit loss forecast business projection',
  },
  {
    title: 'Cash Flow Projection',
    description:
      'Operating, investing and financing cash flows projected forward. Identifies future cash gaps before they become problems and gives banks and investors the liquidity picture they need.',
    query: 'cash flow statement projection finance',
  },
  {
    title: 'Business Valuation',
    description:
      'DCF, comparable company and asset-based approaches. Used for acquisitions, partner buyouts, investor negotiations and estate planning.',
    query: 'business valuation DCF analysis chart',
  },
  {
    title: 'Scenario & Sensitivity Analysis',
    description:
      'Base, upside and downside cases built into the model so decisions can be stress-tested before they are made. Lenders and equity investors expect this; most business owners are flying blind without it.',
    query: 'scenario analysis sensitivity table finance',
  },
  {
    title: 'Divisional P&L',
    description:
      'Separate profit and loss statements by product line, location or business unit, then consolidated to the entity level. Used for buy-side due diligence, internal reporting and bonus calculations.',
    query: 'divisional financial report business segments',
  },
];

const images = [
  {
    src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    alt: 'Financial spreadsheet model with charts',
  },
  {
    src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    alt: 'Stock market charts and financial data',
  },
  {
    src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
    alt: 'Business analytics dashboard',
  },
];

export default function FinancialModeling() {
  return (
    <section className="section fm" id="modeling">
      <Reveal className="section-head">
        <p className="section-label">Part III · Financial Modeling</p>
        <h2>Numbers that <em>tell the story.</em></h2>
        <p className="section-lead">
          Clean books answer what happened. A financial model answers what happens next.
          Whether the purpose is a bank loan, an acquisition, an investor deck or an
          internal operating plan, the model has to be built right: assumptions documented,
          statements linked, and outputs that hold up under questioning.
        </p>
      </Reveal>

      {/* Image strip */}
      <Reveal className="fm-images">
        {images.map((img) => (
          <div key={img.src} className="fm-image-wrap">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </Reveal>

      {/* Model types grid */}
      <div className="fm-grid">
        {types.map((type, i) => (
          <Reveal key={type.title} className="fm-card" delay={i * 65}>
            <div className="fm-card-num">0{i + 1}</div>
            <h3>{type.title}</h3>
            <p>{type.description}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="fm-cta">
        <div className="fm-cta-inner">
          <div>
            <h3>Need a model built or reviewed?</h3>
            <p>Most engagements are scoped and delivered within a week. The first conversation is free.</p>
          </div>
          <a
            className="btn btn-primary"
            href="https://www.upwork.com/freelancers/farhank59"
            target="_blank"
            rel="noreferrer"
          >
            Discuss your project
          </a>
        </div>
      </Reveal>
    </section>
  );
}
