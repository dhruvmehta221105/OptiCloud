import { CircleHelp, Code2 } from "lucide-react";

export function PageHeading({ eyebrow, title, description, action }) {
  return (
    <div className="page-heading">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </div>
  );
}

export function Button({ children, variant = "primary", ...props }) {
  return <button className={`button button-${variant}`} {...props}>{children}</button>;
}

export function StatCard({ label, value, detail, icon: Icon, tone }) {
  return (
    <article className={`stat-card${tone ? ` stat-${tone}` : ""}`}>
      <div className="stat-label">
        <span>{label}</span>
        {Icon && <Icon size={16} />}
      </div>
      <strong className="stat-value">{value}</strong>
      <span className="stat-detail">{detail}</span>
    </article>
  );
}

export function CodePanel({ title, code, changed }) {
  return <div className="code-panel"><div className={`code-title${changed ? " code-title-green" : ""}`}>{title}<button aria-label="Copy code"><Code2 size={13} /></button></div><pre>{code.map((line, index) => <div className={changed && index === 2 ? "code-changed" : !changed && index === 2 ? "code-removed" : ""} key={index}><span>{String(index + 1).padStart(2, "0")}</span>{line}</div>)}</pre><small>{changed ? "Proposed configuration" : "Uploaded configuration"}</small></div>;
}

export function Notice({ children }) {
  return <div className="notice"><CircleHelp size={15} /><span>{children}</span></div>;
}

export function Footer() {
  return <footer className="footer"><span>OptiCloud · Infrastructure clarity, before the next deploy.</span><span>Estimates, not live AWS billing</span></footer>;
}
