import { CircleHelp, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export function PageHeading({ eyebrow, title, description, action }) {
  return (
    <div className="page-heading">
      <div className="page-heading-copy">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({ children, className = "", hover }) {
  return (
    <motion.div
      whileHover={{ y: hover ? -2 : 0 }}
      whileTap={{ y: hover ? 2 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`card${hover ? " card-hover" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Button({ children, variant = "primary", ...props }) {
  return <button className={`button button-${variant}`} {...props}>{children}</button>;
}

export function StatCard({ label, value, detail, icon: Icon, tone }) {
  const toneClass = tone === "green" ? "stat-green" : tone === "amber" ? "stat-amber" : "";
  return (
    <article className={`stat-card ${toneClass}`}>
      <div className="stat-header">
        <span className="stat-label">{label}</span>
        {Icon && <span className="stat-icon"><Icon size={15} /></span>}
      </div>
      <strong className="stat-value">{value}</strong>
      <span className="stat-detail">{detail}</span>
    </article>
  );
}

export function Badge({ children, variant = "gray" }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}

export function CodePanel({ title, code, changed }) {
  return (
    <div className="code-panel">
      <div className={`code-title${changed ? " code-title-green" : ""}`}>
        {title}
        <button aria-label="Copy code"><Code2 size={13} /></button>
      </div>
      <pre>
        {code.map((line, index) => (
          <div
            className={changed && index === 2 ? "code-changed" : !changed && index === 2 ? "code-removed" : ""}
            key={index}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {line}
          </div>
        ))}
      </pre>
      <small>{changed ? "Proposed configuration" : "Uploaded configuration"}</small>
    </div>
  );
}

export function Notice({ children }) {
  return <div className="notice"><CircleHelp size={15} /><span>{children}</span></div>;
}

export function Footer() {
  return (
    <footer className="footer">
      <span>OptiCloud · Infrastructure clarity, before the next deploy.</span>
      <span>Estimates, not live AWS billing</span>
    </footer>
  );
}
