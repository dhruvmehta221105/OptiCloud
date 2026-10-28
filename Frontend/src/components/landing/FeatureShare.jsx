import iconCheck from "../../assets/landing/icon-check.svg";
import iconPlay from "../../assets/landing/icon-play.svg";

export function FeatureShare() {
  return (
    <section className="lp-feature" id="product">
      <div className="lp-feature-grid">
        <div className="lp-feature-copy">
          <span className="lp-badge">Analyze</span>
          <h2>Scan your infrastructure for cost waste.</h2>
          <p>
            OptiCloud reviews your Terraform and Docker configurations to surface unused resources, oversized instances, and configuration inefficiencies before they hit your bill.
          </p>
          <div className="lp-check-row">
            <span className="lp-check">
              <span className="lp-check-icon">
                <img src={iconCheck} alt="" width={13} height={13} />
              </span>
              Terraform analysis
            </span>
            <span className="lp-check">
              <span className="lp-check-icon">
                <img src={iconCheck} alt="" width={13} height={13} />
              </span>
              Read-only by design
            </span>
          </div>
          <a className="lp-see-works" href="#preview">
            <span className="lp-play">
              <img src={iconPlay} alt="" width={24} height={24} />
            </span>
            View the dashboard
          </a>
        </div>

        <div className="lp-feature-media">
          <div className="lp-code-window">
            <div className="lp-code-bar">
              <span className="lp-dots" aria-hidden="true">
                <i /><i /><i />
              </span>
              <span className="lp-code-filename">api.check.ts</span>
            </div>
            <pre className="lp-code-body">{`new ApiCheck('hello-api-1', {
  name: 'Hello API',
  activated: true,
  request: { method: 'GET',
    url: 'https://api.checklyhq.com/public-stats',
    assertions: [
      AssertionBuilder.statusCode().equals(200)
    ],
  }
})`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
