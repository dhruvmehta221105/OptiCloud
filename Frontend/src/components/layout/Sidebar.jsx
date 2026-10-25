import { BookOpen, ChevronDown, ChevronRight, Cloud, Folder, Gauge, LayoutDashboard, MoreHorizontal, Settings, DollarSign, Code2 } from "lucide-react";

const navGroups = [
  {
    label: "WORKSPACE",
    items: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "Projects", icon: Folder },
      { label: "Developers", icon: Code2 },
      { label: "Connect Infrastructure", icon: Cloud },
      { label: "Analyses", icon: Gauge },
      { label: "Costs", icon: DollarSign },
    ],
  },
  {
    label: "SETTINGS",
    items: [
      { label: "Settings", icon: Settings },
      { label: "Documentation", icon: BookOpen },
    ],
  },
];

export function BrandMark({ small = false }) {
  return (
    <span className={`brand-mark${small ? " brand-mark-small" : ""}`} aria-hidden="true">
      <Cloud size={small ? 15 : 20} strokeWidth={2} />
    </span>
  );
}

export function Sidebar({ page, setPage, mobileOpen, closeMobile }) {
  const isMobileOpen = mobileOpen;

  return (
    <>
      {isMobileOpen && (
        <button className="sidebar-backdrop" aria-label="Close menu" onClick={closeMobile} />
      )}
      <aside className={`sidebar${isMobileOpen ? " sidebar-open" : ""}`}>
        <div className="brand-header">
          <a
            className="brand"
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              setPage("Dashboard");
              closeMobile();
            }}
          >
            <BrandMark />
            <span>OptiCloud</span>
          </a>
          <button className="brand-collapse" aria-label="Collapse sidebar" onClick={closeMobile} title="Collapse">
            <ChevronRight size={14} />
          </button>
        </div>

        <button className="workspace-switcher" type="button">
          <span className="workspace-avatar">A</span>
          <span className="workspace-copy">
            <strong>Acme Engineering</strong>
            <small>Team workspace</small>
          </span>
          <ChevronDown size={14} />
        </button>

        <nav aria-label="Main navigation">
          {navGroups.map((group, groupIndex) => (
            <div className="nav-group" key={groupIndex}>
              <p className="nav-label">{group.label}</p>
              {group.items.map(({ label, icon: Icon }) => (
                <button
                  type="button"
                  className={`nav-link${page === label || (label === "Projects" && page.startsWith("Project:")) ? " active" : ""}`}
                  key={label}
                  onClick={() => {
                    setPage(label);
                    closeMobile();
                  }}
                >
                  <Icon size={16} strokeWidth={1.7} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-note">
            <strong>Terraform-first. Review-first.</strong>
            <p>Understand your infrastructure before you change it.</p>
          </div>
          <div className="profile">
            <span className="profile-avatar">JL</span>
            <span>
              <strong>Jamie Lee</strong>
              <small>Platform engineer</small>
            </span>
            <MoreHorizontal size={17} />
          </div>
        </div>
      </aside>
    </>
  );
}
