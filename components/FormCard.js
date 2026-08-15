export default function FormCard({ number, year, title, subtitle, filedLabel = 'E-Filed' }) {
  return (
    <div className="form-card" aria-label={`Form ${number}, ${title}`}>
      <div className="form-card-head">
        <div className="form-no">
          <small>Form</small>
          <strong>{number}</strong>
        </div>
        <div className="form-title">
          <span>{title}</span>
          <small>{subtitle}</small>
        </div>
        <div className="form-year">
          <small>Tax year</small>
          <strong>{year}</strong>
        </div>
      </div>

      <div className="form-fields" aria-hidden="true">
        <div className="form-field wide"><i /><i className="short" /></div>
        <div className="form-checks">
          <span><b /> Single</span>
          <span><b className="checked" /> Married filing jointly</span>
          <span><b /> Head of household</span>
        </div>
        <div className="form-field"><i /><i /><i className="short" /></div>
        <div className="form-field"><i className="short" /><i /></div>
        <div className="form-amounts">
          <span>1a</span><i /><em>.00</em>
        </div>
        <div className="form-amounts">
          <span>2b</span><i /><em>.00</em>
        </div>
      </div>

      <span className="form-stamp">{filedLabel} ✓</span>
    </div>
  );
}
