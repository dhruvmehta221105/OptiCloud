import { ChevronRight, CircleHelp, Menu, Bell, Zap, Home } from "lucide-react";

export function Topbar({ page, onMenu, onHome }) {
  const labels = {
    Dashboard: "Dashboard",
    Projects: "Projects",
    Developers: "Developer hub",
    "Connect Infrastructure": "Connect Infrastructure",
    Analyses: "Analyses",
    Costs: "Cloud Costs",
    Settings: "Settings",
    Documentation: "Documentation",
  };

  return (
    <header className="topbar">
      <div className="breadcrumbs">
        <button className="mobile-menu" onClick={onMenu} aria-label="Open navigation">
          <Menu size={20} />
        </button>
        {onHome && (
          <button className="icon-button" aria-label="Go home" onClick={onHome}>
            <Home size={17} />
          </button>
        )}
        <span>Workspace</span>
        <ChevronRight size={13} />
        <strong>{page.startsWith("Project:") ? `Projects / ${page.replace("Project:", "")}` : labels[page] || page}</strong>
      </div>
      <div className="topbar-actions">
        <span className="demo-pill">Demo data</span>
        <span className="region-label">USD · us-east-1</span>
        <span className="topbar-divider" />
        <button className="icon-button" aria-label="Help"><CircleHelp size={17} /></button>
        <button className="icon-button notification-button" position="relative" aria-label="Notifications">
          <Bell size={17} /><span className="notification-dot" aria-hidden="true" />
        </button>
        <button className="icon-button" aria-label="Quick actions"><Zap size={17} /></button>
      </div>
    </header>
  );
}
