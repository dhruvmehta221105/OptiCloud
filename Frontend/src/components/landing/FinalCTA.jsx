import ctaCube from "../../assets/landing/cta-cube.svg";

export function FinalCTA({ onEnterApp, onStartFree = onEnterApp }) {
  return (
    <section className="lp-final-cta">
      <div className="lp-final-icon">
        <img src={ctaCube} alt="" width={35} height={35} />
      </div>
      <h2>Start optimizing your cloud infrastructure</h2>
      <p>Analyze your Terraform and Docker configurations today.</p>
      <div className="lp-final-actions">
        <button type="button" className="lp-text-btn" onClick={onEnterApp}>
          Request a demo
        </button>
        <button type="button" className="lp-pill-btn" onClick={onStartFree}>
          Start for free
        </button>
      </div>
    </section>
  );
}
