import dashboardPreview from "../../assets/landing/dashboard-preview.png";

export function DashboardPreview({ onEnterApp }) {
  return (
    <section className="lp-preview" id="preview">
      <div className="lp-preview-copy">
        <h2>See your infrastructure in focus</h2>
        <p>Review cost, findings, and recommendations in one dashboard.</p>
        <button type="button" className="lp-pill-btn lp-pill-white" onClick={onEnterApp}>
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
