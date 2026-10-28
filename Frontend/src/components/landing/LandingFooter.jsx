import footerCube from "../../assets/landing/footer-cube.svg";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#product" },
      { label: "Pricing", href: null },
      { label: "Changelog", href: null },
      { label: "Support", action: "Documentation" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Privacy", href: null },
      { label: "Privacy Policy", href: null },
      { label: "Security", href: null },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: null },
      { label: "Contact", href: null },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "GitHub", href: null },
      { label: "LinkedIn", href: null },
      { label: "Twitter", href: null },
    ],
  },
];

export function LandingFooter({ onNavigate }) {
  const handleClick = (link) => {
    if (link.action) {
      onNavigate(link.action);
      return;
    }
    if (link.href) {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="lp-footer">
      <div className="lp-footer-top">
        <div className="lp-footer-brand" aria-label="OptiCloud">
          <span className="lp-footer-icon">
            <img src={footerCube} alt="" width={27} height={27} />
          </span>
        </div>
        <div className="lp-footer-cols">
          {columns.map((col) => (
            <div className="lp-footer-col" key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      className={link.href || link.action ? "lp-footer-link" : "lp-footer-link is-static"}
                      onClick={() => handleClick(link)}
                      disabled={!link.href && !link.action}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="lp-footer-copy">© 2026 OptiCloud. All rights reserved.</p>
    </footer>
  );
}
