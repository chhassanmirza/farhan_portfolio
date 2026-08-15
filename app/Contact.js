import Reveal from './Reveal';

export default function Contact() {
  return (
    <>
      <section className="section contact" id="contact">
        <div className="contact-grid">
          <Reveal className="contact-inner">
            <p className="section-label">Part VII · Contact</p>
            <h2>Open a file.</h2>
            <p className="contact-lead">
              Whether it is a single return, a year of catch-up bookkeeping or an
              ongoing monthly close, the first conversation is free and the scope
              is agreed before any work begins. Available for client engagements
              and remote staff roles with US firms.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="https://www.upwork.com/freelancers/farhank59" target="_blank" rel="noreferrer">Message on Upwork</a>
              <a className="btn btn-ghost" href="mailto:farhanmk853@gmail.com">farhanmk853@gmail.com</a>
            </div>
            <div className="contact-facts">
              <div><strong>Top Rated</strong><span>Upwork badge</span></div>
              <div><strong>96%</strong><span>Job Success</span></div>
              <div><strong>210</strong><span>Engagements</span></div>
              <div><strong>PTIN</strong><span>IRS-registered preparer</span></div>
            </div>
          </Reveal>
          <Reveal className="contact-portrait" delay={100}>
            <div className="portrait-card">
              <img src="/farhan.jpg" alt="Farhan K., US tax preparer and bookkeeper" />
              <div className="portrait-caption">
                <strong>Farhan K.</strong>
                <span>US Tax Preparer · QuickBooks &amp; Xero</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="site-footer">
        <span>© 2026 Farhan K. · IRS-registered tax return preparer (PTIN holder)</span>
        <div>
          <a href="mailto:farhanmk853@gmail.com">Email</a>
          <a href="https://www.upwork.com/freelancers/farhank59" target="_blank" rel="noreferrer">Upwork</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
