import { Dashboard } from "./pages/Dashboard.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Upload } from "./pages/Upload.jsx";
import { Analyses } from "./pages/Analyses.jsx";
import { Settings } from "./pages/Settings.jsx";
import { Documentation } from "./pages/Documentation.jsx";

export const routes = [
  { path: "Dashboard", component: Dashboard },
  { path: "Projects", component: Projects },
  { path: "Connect infrastructure", component: Upload },
  { path: "Analyses", component: Analyses },
  { path: "Settings", component: Settings },
  { path: "Documentation", component: Documentation },
];

export const defaultRoute = "Dashboard";
