import { useState } from "react";
import { Sidebar, Topbar } from "./components/layout/WorkspaceLayout.jsx";
import { Dashboard } from "./features/dashboard/Dashboard.jsx";
import { ProjectsPage } from "./features/projects/ProjectsPage.jsx";
import { UploadPage } from "./features/infrastructure/UploadPage.jsx";
import { AnalysesPage } from "./features/analyses/AnalysesPage.jsx";
import { SettingsPage } from "./features/settings/SettingsPage.jsx";
import { DocumentationPage } from "./features/documentation/DocumentationPage.jsx";

export default function App() {
  const [page, setPage] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  let content;
  if (page === "Projects") content = <ProjectsPage setPage={setPage} />;
  else if (page === "Connect infrastructure") content = <UploadPage setPage={setPage} />;
  else if (page === "Analyses") content = <AnalysesPage setPage={setPage} />;
  else if (page === "Settings") content = <SettingsPage />;
  else if (page === "Documentation") content = <DocumentationPage />;
  else content = <Dashboard setPage={setPage} />;

  return (
    <div className="app-shell">
      <Sidebar page={page} setPage={setPage} mobileOpen={mobileOpen} closeMobile={() => setMobileOpen(false)} />
      <div className="main-column">
        <Topbar page={page} onMenu={() => setMobileOpen(true)} />
        <main className="main-content">{content}</main>
      </div>
    </div>
  );
}
