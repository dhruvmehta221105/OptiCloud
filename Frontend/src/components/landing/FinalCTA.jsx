import ctaCube from "../../assets/landing/cta-cube.svg";

export function FinalCTA({ onEnterApp }) {
  return (
    <section className="lp-final-cta">
      <div className="lp-final-icon">
        <img src={ctaCube} alt="" width={35} height={35} />
      </div>
      <h2>Increase your team’s visibility and alignment</h2>
      <p>Start for free, flexible for all teams.</p>
      <div className="lp-final-actions">
        <button type="button" className="lp-text-btn" onClick={onEnterApp}>
          Request a demo
        </button>
        <button type="button" className="lp-pill-btn" onClick={onEnterApp}>
          Start for free
        </button>
      </div>
    </section>
  );
}
