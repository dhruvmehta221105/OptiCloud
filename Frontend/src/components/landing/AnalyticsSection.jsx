import analyticsCards from "../../assets/landing/analytics-cards.png";
import chartArea from "../../assets/landing/chart-area.svg";
import chartCurve from "../../assets/landing/chart-curve.svg";
import chartDotOuter from "../../assets/landing/chart-dot-outer.svg";
import chartDotInner from "../../assets/landing/chart-dot-inner.svg";
import leadsArea from "../../assets/landing/leads-area.svg";
import leadsLine from "../../assets/landing/leads-line.svg";

export function AnalyticsSection() {
  return (
    <section className="lp-analytics" id="archive">
      <h2>Your Archive of progress</h2>

      <div className="lp-analytics-grid lp-analytics-desktop">
        <article className="lp-analytics-card">
          <div className="lp-analytics-copy">
            <strong>Projects</strong>
            <span>Organize, follow, and archive.</span>
          </div>
          <div className="lp-chart-panel">
            <div className="lp-chart-toolbar">
              <span>Overview</span>
              <span className="lp-chart-pill">Monthly</span>
            </div>
            <div className="lp-chart-body">
              <div className="lp-chart-y">
                <span>10k</span>
                <span>6k</span>
                <span>5k</span>
              </div>
              <div className="lp-chart-plot">
                <img className="lp-chart-fill" src={chartArea} alt="" width={323} height={173} />
                <img className="lp-chart-line" src={chartCurve} alt="" width={323} height={139} />
                <div className="lp-chart-marker">
                  <span className="lp-chart-tip">
                    <strong>5,560$</strong>
                    <small>Ratings</small>
                  </span>
                  <img src={chartDotOuter} alt="" width={20} height={20} />
                  <img className="lp-chart-dot-inner" src={chartDotInner} alt="" width={10} height={10} />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="lp-analytics-card">
          <div className="lp-analytics-copy">
            <strong>Member profiles</strong>
            <span>Automatic portfolios of your work.</span>
          </div>
          <div className="lp-leads-panel">
            <span className="lp-leads-pill">New Leads</span>
            <div className="lp-leads-stats">
              <strong>3,729</strong>
              <span>70.0%</span>
            </div>
            <div className="lp-leads-chart">
              <img src={leadsArea} alt="" width={255} height={186} />
              <img className="lp-leads-line" src={leadsLine} alt="" width={254} height={173} />
            </div>
          </div>
        </article>
      </div>

      <img
        className="lp-analytics-fallback"
        src={analyticsCards}
        alt="Projects and member profiles analytics cards"
        width={1174}
        height={400}
      />
    </section>
  );
}
