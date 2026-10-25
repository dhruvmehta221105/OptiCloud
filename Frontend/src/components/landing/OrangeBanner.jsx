import bannerCube from "../../assets/landing/banner-cube.svg";
import bannerChevron from "../../assets/landing/banner-chevron.svg";
import iconMentions from "../../assets/landing/icon-mentions.svg";
import iconPolls from "../../assets/landing/icon-polls.svg";
import iconResolve from "../../assets/landing/icon-resolve.svg";
import avatar1 from "../../assets/landing/banner-avatar-1.png";
import avatar2 from "../../assets/landing/banner-avatar-2.png";
import avatar3 from "../../assets/landing/banner-avatar-3.png";

const cards = [
  {
    icon: iconMentions,
    title: "Mentions",
    body: "Mention anyone on your team to include them in a post.",
  },
  {
    icon: iconPolls,
    title: "Polls",
    body: "Get a quick gut check from the team on design options.",
  },
  {
    icon: iconResolve,
    title: "Resolve comments",
    body: "Mark comments as resolved to keep the conversation focused.",
  },
];

export function OrangeBanner() {
  return (
    <section className="lp-orange-banner">
      <div className="lp-orange-inner">
        <p className="lp-orange-eyebrow">Best time here</p>
        <h2>Better feedback at the right time.</h2>

        <article className="lp-cloudhub-card">
          <div className="lp-cloudhub-top">
            <div className="lp-cloudhub-brand">
              <span className="lp-cloudhub-icon">
                <img src={bannerCube} alt="" width={39} height={39} />
              </span>
              <div>
                <strong>Cloudhub</strong>
                <small>2m ago in Brand</small>
              </div>
            </div>
            <button type="button" className="lp-pill-btn lp-pill-sm">
              View post
            </button>
          </div>
          <div className="lp-cloudhub-bottom">
            <div className="lp-avatar-stack">
              <img src={avatar1} alt="" width={48} height={48} />
              <img src={avatar2} alt="" width={48} height={48} />
              <img src={avatar3} alt="" width={48} height={48} />
            </div>
            <p>3 people are looking for feedback this week</p>
            <img className="lp-cloudhub-chevron" src={bannerChevron} alt="" width={34} height={34} />
          </div>
        </article>

        <div className="lp-orange-cards">
          {cards.map((card) => (
            <article className="lp-orange-card" key={card.title}>
              <img src={card.icon} alt="" width={40} height={40} />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
