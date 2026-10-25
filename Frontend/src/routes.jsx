import { Dashboard } from "./pages/Dashboard.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Upload } from "./pages/Upload.jsx";
import { Analyses } from "./pages/Analyses.jsx";
import { Costs } from "./pages/Costs.jsx";
import { Settings } from "./pages/Settings.jsx";
import { Documentation } from "./pages/Documentation.jsx";
import { Developers } from "./pages/Developers.jsx";
import { ProjectDetails } from "./pages/ProjectDetails.jsx";

export const routes = [
  { path: "Dashboard", component: Dashboard },
  { path: "Projects", component: Projects },
  { path: "Developers", component: Developers },
  { path: "Connect Infrastructure", component: Upload },
  { path: "Analyses", component: Analyses },
  { path: "Costs", component: Costs },
  { path: "Settings", component: Settings },
  { path: "Documentation", component: Documentation },
];

export const defaultRoute = "Home";

export function getProjectRoute(page) {
  if (!page.startsWith("Project:")) return null;
  return routes.find((route) => route.path === "Project details");
}

routes.push({ path: "Project details", component: ProjectDetails });
