import { BookOpen, Bell, ChevronDown, ChevronRight, Cloud, CircleHelp, Folder, Gauge, LayoutDashboard, Menu, MoreHorizontal, Settings } from "lucide-react";

const navGroups = [
  {
    label: "WORKSPACE",
    items: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "Projects", icon: Folder },
      { label: "Connect infrastructure", icon: Cloud },
      { label: "Analyses", icon: Gauge },
    ],
  },
  {
    label: " ",
    items: [
      { label: "Settings", icon: Settings },
      { label: "Documentation", icon: BookOpen },
    ],
  },
];

export function BrandMark({ small = false }) {
  return (
    <span className={`brand-mark${small ? " brand-mark-small" : ""}`} aria-hidden="true">
      <Cloud size={small ? 15 : 19} strokeWidth={2.1} />
    </span>
  );
}

export function Sidebar({ page, setPage, mobileOpen, closeMobile }) {
  return (
    <>
      {mobileOpen && <button className="sidebar-backdrop" aria-label="Close menu" onClick={closeMobile} />}
      <aside className={`sidebar${mobileOpen ? " sidebar-open" : ""}`}>
        <a className="brand" href="#dashboard" onClick={() => setPage("Dashboard")}>
          <BrandMark />
          <span>OptiCloud</span>
        </a>

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
              {group.label.trim() && <p className="nav-label">{group.label}</p>}
              {group.items.map(({ label, icon: Icon }) => (
                <button
                  type="button"
                  className={`nav-link${page === label ? " active" : ""}`}
                  key={label}
                  onClick={() => {
                    setPage(label);
                    closeMobile();
                  }}
                >
                  <Icon size={16} strokeWidth={1.8} />
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

export function Topbar({ page, onMenu }) {
  return (
    <header className="topbar">
      <div className="breadcrumbs">
        <button className="mobile-menu" onClick={onMenu} aria-label="Open navigation">
          <Menu size={19} />
        </button>
        <span>Workspace</span>
        <ChevronRight size={13} />
        <strong>{page === "Connect infrastructure" ? "Connect infrastructure" : page}</strong>
      </div>
      <div className="topbar-actions">
        <span className="demo-pill">Demo data</span>
        <span className="region-label">USD · us-east-1</span>
        <span className="topbar-divider" />
        <button className="icon-button" aria-label="Help"><CircleHelp size={17} /></button>
        <button className="icon-button notification-button" aria-label="Notifications">
          <Bell size={17} /><i />
        </button>
      </div>
    </header>
  );
}
