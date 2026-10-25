import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavigationProvider, useNavigation } from "./context/NavigationContext.jsx";
import { WorkspaceLayout } from "./components/layout/WorkspaceLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { routes } from "./routes.jsx";
import { ProjectDetails } from "./pages/ProjectDetails.jsx";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12, transition: { duration: 0.15 } },
};

function WorkspacePage({ page, component: Page }) {
  const { setPage, mobileOpen, setMobileOpen } = useNavigation();

  return (
    <div className="app-shell">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="page-wrap"
        >
          <WorkspaceLayout page={page} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}>
            <Page setPage={setPage} />
          </WorkspaceLayout>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function AppRoutes() {
  const { setPage } = useNavigation();

  return (
    <Routes>
      <Route path="/" element={<div className="app-shell app-shell-landing"><Home setPage={setPage} /></div>} />
      {routes.map(({ path, url, component }) => (
        <Route key={url} path={url} element={<WorkspacePage page={path} component={component} />} />
      ))}
      <Route path="/projects/:projectName" element={<WorkspacePage page="Project details" component={ProjectDetails} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
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
