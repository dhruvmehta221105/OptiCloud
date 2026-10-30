import { SmoothScroll } from "./components/SmoothScroll.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavigationProvider, useNavigation } from "./context/NavigationContext.jsx";
import { WorkspaceLayout } from "./components/layout/WorkspaceLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { routes } from "./routes.jsx";
import { ProjectDetails } from "./pages/ProjectDetails.jsx";
import { Login } from "./pages/Login.jsx";

function WorkspacePage({ page, component: Page }) {
  const { setPage, mobileOpen, setMobileOpen } = useNavigation();

  return (
    <div className="app-shell">
      <WorkspaceLayout page={page} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}>
        <Page setPage={setPage} />
      </WorkspaceLayout>
    </div>
  );
}

function AppRoutes() {
  const { setPage } = useNavigation();

  return (
    <>
      <SmoothScroll />
      <Routes>
      <Route path="/" element={<div className="app-shell app-shell-landing"><Home setPage={setPage} /></div>} />
      <Route path="/login" element={<div className="app-shell app-shell-login"><Login /></div>} />
      <Route path="/create-account" element={<div className="app-shell app-shell-login"><Login mode="create-account" /></div>} />
      <Route path="/forgot-password" element={<div className="app-shell app-shell-login"><Login mode="forgot-password" /></div>} />
      {routes.map(({ path, url, component }) => (
        <Route key={url} path={url} element={<WorkspacePage page={path} component={component} />} />
      ))}
      <Route path="/projects/:projectName" element={<WorkspacePage page="Project details" component={ProjectDetails} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <AppRoutes />
      </NavigationProvider>
    </BrowserRouter>
  );
}
