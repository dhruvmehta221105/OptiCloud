import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoWordmark from "../../assets/landing/logo-opticloud.png";
import chevronDown from "../../assets/landing/chevron-down.svg";

const navLinks = [
  { label: "Product", action: "Dashboard" },
  { label: "Pricing", action: "Costs" },
  { label: "Integrations", action: "Connect Infrastructure" },
  { label: "Developers", action: "Developers" },
];

export function LandingNavbar({ onEnterApp, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNav = (link) => {
    setOpen(false);
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
    <header className="lp-nav">
      <div className="lp-nav-inner">
        <a
          className="lp-brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
        >
          <img src={logoWordmark} alt="OptiCloud" width={160} height={40} />
        </a>

        <nav className="lp-nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <button key={link.label} type="button" className="lp-nav-link" onClick={() => handleNav(link)}>
              {link.label}
              {link.hasMenu && <img src={chevronDown} alt="" width={18} height={18} />}
            </button>
          ))}
        </nav>

        <div className="lp-nav-actions">
          <button type="button" className="lp-text-btn" onClick={onEnterApp}>
            Log in
          </button>
          <button type="button" className="lp-pill-btn" onClick={onEnterApp}>
            Get started
          </button>
          <button
            type="button"
            className="lp-menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lp-mobile-drawer">
            {navLinks.map((link) => (
              <button key={link.label} type="button" className="lp-mobile-link" onClick={() => handleNav(link)}>
                {link.label}
              </button>
            ))}
            <button type="button" className="lp-text-btn" onClick={() => { setOpen(false); onEnterApp(); }}>
              Log in
            </button>
            <button type="button" className="lp-pill-btn" onClick={() => { setOpen(false); onEnterApp(); }}>
              Get started
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
