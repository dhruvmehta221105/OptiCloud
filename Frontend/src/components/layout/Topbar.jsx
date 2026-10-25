import { ChevronRight, CircleHelp, Menu, Bell } from "lucide-react";

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
