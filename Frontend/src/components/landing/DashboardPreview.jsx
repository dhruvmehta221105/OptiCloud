import dashboardPreview from "../../assets/landing/dashboard-preview.png";

export function DashboardPreview({ onEnterApp, onStartFree = onEnterApp }) {
  return (
    <section className="lp-preview" id="preview">
      <div className="lp-preview-copy">
<<<<<<< HEAD
        <h2>Keep every one in the loop</h2>
        <p>All good things starts with a homepage. Get inspired without breaking your wallet.</p>
        <button type="button" className="lp-pill-btn lp-pill-white" onClick={onStartFree}>
=======
        <h2>See your infrastructure in focus</h2>
        <p>Review cost, findings, and recommendations in one dashboard.</p>
        <button type="button" className="lp-pill-btn lp-pill-white" onClick={onEnterApp}>
>>>>>>> f09624c99172f028212d74a248523e7aae7be16a
          Start for free
        </button>
      </div>
      <div className="lp-preview-frame">
        <img
          src={dashboardPreview}
          alt="OptiCloud dashboard preview showing projects and progress"
          width={1014}
          height={505}
        />
      </div>
    </section>
  );
}
