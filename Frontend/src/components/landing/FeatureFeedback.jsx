import iconPlay from "../../assets/landing/icon-play.svg";
import iconAdd from "../../assets/landing/icon-add.svg";
import avatarBuzz from "../../assets/landing/avatar-buzz.png";
import avatarGabriel from "../../assets/landing/avatar-gabriel.png";
import avatarJochem from "../../assets/landing/avatar-jochem.png";

const rows = [
  { name: "Buzz Usborne", status: "Pending", avatar: avatarBuzz },
  { name: "Gabriel Valdivia", status: "Done", avatar: avatarGabriel },
  { name: "Jochem Dierx", status: "Requested", avatar: avatarJochem },
];

export function FeatureFeedback() {
  return (
    <section className="lp-feature lp-feature-alt">
      <div className="lp-feature-grid lp-feature-grid-reverse">
        <div className="lp-feature-media">
          <div className="lp-feedback-card">
            <div className="lp-feedback-head">
              <strong>Looking for feedback?</strong>
              <span className="lp-toggle" aria-hidden="true" />
            </div>
            <ul className="lp-feedback-list">
              {rows.map((row) => (
                <li key={row.name}>
                  <span className="lp-feedback-person">
                    <img src={row.avatar} alt="" width={43} height={43} />
                    {row.name}
                  </span>
                  <span className="lp-feedback-status">{row.status}</span>
                </li>
              ))}
              <li className="lp-feedback-add">
                <span className="lp-feedback-person">
                  <span className="lp-add-avatar">
                    <img src={iconAdd} alt="" width={24} height={24} />
                  </span>
                  <span className="lp-add-label">Add More</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lp-feature-copy">
          <span className="lp-badge">Feedback</span>
          <h2>Better feedback at the right time.</h2>
          <p>
            Campsite has been instrumental in keeping designers aware of each others&apos;
            work-in-progress in a way that was previously slowing us down. It&apos;s also one of
            the only channels where.
          </p>
          <a className="lp-see-works" href="#preview">
            <span className="lp-play">
              <img src={iconPlay} alt="" width={24} height={24} />
            </span>
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
