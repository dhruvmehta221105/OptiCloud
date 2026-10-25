import { Dashboard } from "./pages/Dashboard.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Upload } from "./pages/Upload.jsx";
import { Analyses } from "./pages/Analyses.jsx";
import { Costs } from "./pages/Costs.jsx";
import { Settings } from "./pages/Settings.jsx";
import { Documentation } from "./pages/Documentation.jsx";
import { Developers } from "./pages/Developers.jsx";
import { pagePaths } from "./navigation.js";

export const routes = [
  { path: "Dashboard", url: pagePaths.Dashboard, component: Dashboard },
  { path: "Projects", url: pagePaths.Projects, component: Projects },
  { path: "Developers", url: pagePaths.Developers, component: Developers },
  { path: "Connect Infrastructure", url: pagePaths["Connect Infrastructure"], component: Upload },
  { path: "Analyses", url: pagePaths.Analyses, component: Analyses },
  { path: "Costs", url: pagePaths.Costs, component: Costs },
  { path: "Settings", url: pagePaths.Settings, component: Settings },
  { path: "Documentation", url: pagePaths.Documentation, component: Documentation },
];
