import Reveal from './Reveal';

const reviews = [
  {
    quote:
      'Farhan is a great professional and working with him has been one of the best I\u2019ve had on Upwork. His attention to detail, communication, and technical expertise exceeded all expectations. It truly felt like having a partner, not just a freelancer.',
    project: 'Ownership change documentation',
    tags: ['Professional', 'Detail Oriented', 'Clear Communicator'],
  },
  {
    quote:
      'He is patient, knowledgeable, and always willing to explain things clearly so I understand every part of my return. I feel confident knowing my taxes are handled correctly and thoroughly.',
    project: 'US individual tax return',
    tags: ['Committed to Quality', 'Solution Oriented', 'Clear Communicator'],
  },
  {
    quote:
      'He was fast (worked the weekend to get it done on a tight deadline), accurate and willing to make changes throughout the process. I would absolutely use him again.',
    project: 'CPA acquisition audit support',
    tags: ['Reliable', 'Clear Communicator'],
  },
  {
    quote:
      'His communication was excellent throughout the process, always prompt, clear, and proactive. He completed everything on time and followed up diligently to ensure nothing was overlooked.',
    project: 'Bookkeeping and Delaware tax return',
    tags: ['Clear Communicator', 'Reliable', 'Collaborative'],
  },
];

export default function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <Reveal className="section-head">
        <p className="section-label">Part IV · Client reviews</p>
        <h2>In the clients&rsquo; own words.</h2>
        <p className="section-lead">
          Quoted directly from reviewed Upwork engagements. One pattern worth noting:
          clients can endorse a freelancer with attribute tags, and
          <strong> &ldquo;Clear Communicator&rdquo; appears on every single one of these reviews.</strong>
        </p>
      </Reveal>

      <div className="review-grid">
        {reviews.map((r, i) => (
          <Reveal key={r.project} className="review-card" delay={i * 80}>
            <span className="review-stars" aria-label="Rated 5 out of 5">★★★★★ 5.0</span>
            <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
            <div className="review-meta">
              <span className="review-project">{r.project}</span>
              <div className="review-tags">
                {r.tags.map((t) => (
                  <i key={t} className={t === 'Clear Communicator' ? 'tag-highlight' : ''}>{t}</i>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
