import Reveal from './Reveal';

const engagements = [
  {
    period: 'Oct 2024 – Jun 2025',
    title: 'Business ownership change, fully documented',
    detail: 'A nine-month engagement documenting the entire transfer process end to end. The client called it one of the best experiences they have had on Upwork.',
    rating: '5.0',
  },
  {
    period: 'May 2025',
    title: 'Three-year divisional P&Ls that tie to tax returns',
    detail: 'Buy-side work for a CPA auditing a business acquisition. Delivered on a tight deadline, including weekend work, with revisions handled throughout.',
    rating: '5.0',
  },
  {
    period: 'Apr 2026',
    title: 'Individual US tax return, prepared and explained',
    detail: 'Full preparation with every part of the return walked through in plain language, so the client understood exactly what was filed and why.',
    rating: '5.0',
  },
  {
    period: 'Aug 2025',
    title: 'Bookkeeping and Delaware tax return 2024',
    detail: 'Books managed and the state return completed on time, with proactive follow-up to make sure nothing was overlooked.',
    rating: '5.0',
  },
  {
    period: 'Aug 2025',
    title: 'US tax assistance, quick turnaround',
    detail: 'Scoped correctly on the first call and completed fast. The kind of small engagement that turns into a long-term client.',
    rating: '5.0',
  },
];

export default function Engagements() {
  return (
    <section className="section engagements" id="engagements">
      <Reveal className="section-head">
        <p className="section-label">Line 2 · Selected engagements</p>
        <h2>210 jobs on the record. <em>Here are five.</em></h2>
        <p className="section-lead">
          Every entry below is a real, reviewed Upwork engagement. The full history
          is public on the profile.
        </p>
      </Reveal>

      <div className="engagement-table">
        <div className="engagement-columns">
          <span>Period</span>
          <span>Engagement</span>
          <span>Client rating</span>
        </div>
        {engagements.map((e, i) => (
          <Reveal key={e.title} className="engagement-row" delay={i * 70}>
            <span className="e-period">{e.period}</span>
            <div className="e-body">
              <h3>{e.title}</h3>
              <p>{e.detail}</p>
            </div>
            <span className="e-rating">★ {e.rating}</span>
          </Reveal>
        ))}
      </div>

      <Reveal className="engagement-foot">
        <a href="https://www.upwork.com/freelancers/farhank59" target="_blank" rel="noreferrer">
          Verify all 210 on Upwork ↗
        </a>
      </Reveal>
    </section>
  );
}
