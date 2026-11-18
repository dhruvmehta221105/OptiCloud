const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Get started with OptiCloud at no cost.",
    action: "Choose Free",
  },
  {
    name: "Monthly",
    price: "₹1,099",
    period: "per month",
    description: "A flexible plan billed monthly.",
    action: "Choose Monthly",
    featured: true,
  },
  {
    name: "Yearly",
    price: "₹11,099",
    period: "per year",
    description: "One simple yearly subscription.",
    action: "Choose Yearly",
  },
];

export function Pricing({ setPage }) {
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
          <p className="pricing-eyebrow">Simple plans</p>
          <h1 id="pricing-title">Choose your subscription</h1>
          <p>Pick the plan that works for you.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card${plan.featured ? " pricing-card-featured" : ""}`}
              key={plan.name}
            >
              {plan.featured && <span className="pricing-popular">Popular</span>}
              <h2>{plan.name}</h2>
              <p className="pricing-description">{plan.description}</p>
              <p className="pricing-price">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </p>
              <button
                type="button"
                className={plan.featured ? "lp-pill-btn pricing-action" : "lp-pill-btn lp-pill-white pricing-action"}
                onClick={() => setPage("Create account")}
              >
                {plan.action}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
