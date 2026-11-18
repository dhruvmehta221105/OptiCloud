import { useState } from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    description: "Core tools to get started with cloud cost optimization.",
    prices: { Weekly: "₹199", Monthly: "₹699", Yearly: "₹7,999" },
    features: [
      "Up to 3 cloud projects",
      "5 infrastructure scans per month",
      "Core cost insights and recommendations",
      "Standard email support",
    ],
  },
  {
    name: "Intermediate",
    description: "More capacity and deeper insights for growing teams.",
    prices: { Weekly: "₹349", Monthly: "₹1,199", Yearly: "₹11,999" },
    features: [
      "Up to 15 cloud projects",
      "50 infrastructure scans per month",
      "Advanced optimization recommendations",
      "Savings tracking and CSV report exports",
      "Team collaboration for up to 3 members",
    ],
  },
  {
    name: "Pro",
    description: "The complete OptiCloud toolkit for larger teams.",
    prices: { Weekly: "₹499", Monthly: "₹1,799", Yearly: "₹17,999" },
    features: [
      "Unlimited cloud projects and infrastructure scans",
      "Full AI-powered optimization recommendations",
      "Advanced analytics and custom reports",
      "Team collaboration for up to 10 members",
      "Priority support",
    ],
  },
];

const billingPeriods = [
  { name: "Weekly", suffix: "per week" },
  { name: "Monthly", suffix: "per month" },
  { name: "Yearly", suffix: "per year" },
];

export function Pricing({ setPage }) {
  const [selectedTier, setSelectedTier] = useState(tiers[0]);
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const chooseTier = (tier) => {
    setSelectedTier(tier);
    setSelectedPeriod(null);
  };

  return (
    <main className="landing-page pricing-page">
      <header className="pricing-header">
        <button type="button" className="lp-text-btn" onClick={() => setPage("Home")}>
          ← Back to home
        </button>
        <span className="pricing-brand">OptiCloud</span>
      </header>

      <section className="pricing-content" aria-labelledby="pricing-title">
        <div className="pricing-intro">
          <p className="pricing-eyebrow">Plans for every team</p>
          <h1 id="pricing-title">Choose your subscription</h1>
          <p>Select a tier to see its features and payment options.</p>
        </div>

        <div className="pricing-tier-grid" aria-label="Subscription tiers">
          {tiers.map((tier) => (
            <button
              aria-pressed={selectedTier.name === tier.name}
              className={`pricing-tier${selectedTier.name === tier.name ? " pricing-tier-selected" : ""}`}
              key={tier.name}
              onClick={() => chooseTier(tier)}
              type="button"
            >
              <span className="pricing-tier-name">{tier.name}</span>
              <span className="pricing-tier-description">{tier.description}</span>
            </button>
          ))}
        </div>

        <section className="pricing-selection" aria-labelledby="selected-tier-title">
          <div className="pricing-features">
            <div className="pricing-section-heading">
              <p className="pricing-eyebrow">Included with</p>
              <h2 id="selected-tier-title">{selectedTier.name}</h2>
            </div>
            <ul>
              {selectedTier.features.map((feature) => (
                <li key={feature}>
                  <Check aria-hidden="true" size={17} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pricing-payment">
            <div className="pricing-section-heading">
              <p className="pricing-eyebrow">Payment options</p>
              <h2>Choose a billing period</h2>
            </div>
            <div className="pricing-period-grid">
              {billingPeriods.map((period) => {
                const isSelected = selectedPeriod === period.name;
                return (
                  <article
                    className={`pricing-period-card${isSelected ? " pricing-period-selected" : ""}`}
                    key={period.name}
                  >
                    <h3>{period.name}</h3>
                    <p className="pricing-price">
                      <strong>{selectedTier.prices[period.name]}</strong>
                      <span>{period.suffix}</span>
                    </p>
                    <button
                      aria-pressed={isSelected}
                      className={isSelected ? "lp-pill-btn pricing-action" : "lp-pill-btn lp-pill-white pricing-action"}
                      onClick={() => setSelectedPeriod(period.name)}
                      type="button"
                    >
                      {isSelected ? "Selected" : `Choose ${period.name}`}
                    </button>
                  </article>
                );
              })}
            </div>
            {selectedPeriod && (
              <div className="pricing-continue">
                <p>
                  Selected: <strong>{selectedTier.name} · {selectedPeriod}</strong>
                </p>
                <button
                  type="button"
                  className="lp-pill-btn"
                  onClick={() => setPage("Create account")}
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
