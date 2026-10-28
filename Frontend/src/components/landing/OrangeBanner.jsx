import bannerCube from "../../assets/landing/banner-cube.svg";
import bannerChevron from "../../assets/landing/banner-chevron.svg";
import iconSavings from "../../assets/landing/icon-mentions.svg";
import iconPerformance from "../../assets/landing/icon-polls.svg";
import iconArchitecture from "../../assets/landing/icon-resolve.svg";

const cards = [
  {
    icon: iconSavings,
    title: "Cost efficiency",
    body: "Right-size compute and optimize storage to reduce monthly spend.",
  },
  {
    icon: iconPerformance,
    title: "Performance",
    body: "Review storage throughput and burst limits for bottlenecks.",
  },
  {
    icon: iconArchitecture,
    title: "Architecture",
    body: "Improve resilience and fault isolation across availability zones.",
  },
];

export function OrangeBanner() {
  return (
    <section className="lp-orange-banner">
      <div className="lp-orange-inner">
        <p className="lp-orange-eyebrow">Sample insights</p>
        <h2>Real optimization opportunities</h2>

        <article className="lp-cloudhub-card">
          <div className="lp-cloudhub-top">
            <div className="lp-cloudhub-brand">
              <span className="lp-cloudhub-icon">
                <img src={bannerCube} alt="" width={39} height={39} />
              </span>
              <div>
                <strong>OptiCloud</strong>
                <small>Sample data · Production</small>
              </div>
            </div>
            <button type="button" className="lp-pill-btn lp-pill-sm">
              View details
            </button>
          </div>
          <div className="lp-cloudhub-bottom">
            <div className="lp-avatar-stack">
              <img src={bannerCube} alt="" width={48} height={48} />
              <img src={bannerCube} alt="" width={48} height={48} />
              <img src={bannerCube} alt="" width={48} height={48} />
            </div>
            <p>3 active findings this week</p>
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
