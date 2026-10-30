import iconPlay from "../../assets/landing/icon-play.svg";
import iconAdd from "../../assets/landing/icon-add.svg";

const rows = [
  { name: "Oversized EC2 instances", status: "High", icon: null },
  { name: "Unattached storage volumes", status: "Medium", icon: null },
  { name: "Inefficient Docker layers", status: "Low", icon: null },
];

export function FeatureFeedback() {
  return (
    <section className="lp-feature lp-feature-alt">
      <div className="lp-feature-grid lp-feature-grid-reverse">
        <div className="lp-feature-media">
          <div className="lp-feedback-card">
            <div className="lp-feedback-head">
              <strong>Sample findings</strong>
              <span className="lp-toggle" aria-hidden="true" />
            </div>
            <ul className="lp-feedback-list">
              {rows.map((row) => (
                <li key={row.name}>
                  <span className="lp-feedback-person">
                    <span className="lp-feedback-icon">{row.name.charAt(0)}</span>
                    {row.name}
                  </span>
                  <span className="lp-feedback-status">{row.status} severity</span>
                </li>
              ))}
              <li className="lp-feedback-add">
                <span className="lp-feedback-person">
                  <span className="lp-add-avatar">
                    <img src={iconAdd} alt="" width={24} height={24} />
                  </span>
                  <span className="lp-add-label">Add finding</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lp-feature-copy">
          <span className="lp-badge">Insights</span>
          <h2>Infrastructure findings, prioritized by impact.</h2>
          <p>
            Each finding is scored by potential savings and severity, so your team knows what to fix first — from oversized EC2 instances to unattached storage volumes.
          </p>
          <a className="lp-see-works" href="#preview">
            <span className="lp-play">
              <img src={iconPlay} alt="" width={24} height={24} />
            </span>
            See all findings
          </a>
        </div>
      </div>
    </section>
  );
}
