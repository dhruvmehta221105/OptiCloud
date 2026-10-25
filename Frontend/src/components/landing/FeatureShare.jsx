import iconCheck from "../../assets/landing/icon-check.svg";
import iconPlay from "../../assets/landing/icon-play.svg";

export function FeatureShare() {
  return (
    <section className="lp-feature" id="product">
      <div className="lp-feature-grid">
        <div className="lp-feature-copy">
          <span className="lp-badge">Share</span>
          <h2>Share anything you’re working on.</h2>
          <p>
            Campsite has been instrumental in keeping designers aware of each others&apos;
            work-in-progress in a way that was previously slowing us down. It&apos;s also one of
            the only channels where.
          </p>
          <div className="lp-check-row">
            <span className="lp-check">
              <span className="lp-check-icon">
                <img src={iconCheck} alt="" width={13} height={13} />
              </span>
              Coded
            </span>
            <span className="lp-check">
              <span className="lp-check-icon">
                <img src={iconCheck} alt="" width={13} height={13} />
              </span>
              100% Secure
            </span>
          </div>
          <a className="lp-see-works" href="#preview">
            <span className="lp-play">
              <img src={iconPlay} alt="" width={24} height={24} />
            </span>
            See how it works
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
