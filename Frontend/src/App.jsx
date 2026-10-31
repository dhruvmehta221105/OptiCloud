import { SmoothScroll } from "./components/SmoothScroll.jsx";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NavigationProvider, useNavigation } from "./context/NavigationContext.jsx";
import { WorkspaceLayout } from "./components/layout/WorkspaceLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { routes } from "./routes.jsx";
import { ProjectDetails } from "./pages/ProjectDetails.jsx";
import { Login } from "./pages/Login.jsx";

const pageVariants = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

function PageContent({ page, setPage, component: Page, pageProps }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={pageVariants.initial}
        animate={pageVariants.animate}
        exit={pageVariants.exit}
        variants={pageVariants}
        transition={{ duration: 0.22 }}
        className="route-content"
      >
        <Page setPage={setPage} {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

function WorkspacePage({ page, component: Page, pageProps }) {
  const { setPage, mobileOpen, setMobileOpen } = useNavigation();

  return (
    <div className="app-shell">
      <WorkspaceLayout page={page} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}>
        <PageContent page={page} setPage={setPage} component={Page} pageProps={pageProps} />
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
        <Route
          path="/"
          element={
            <div className="app-shell app-shell-landing">
              <PageContent page="Home" setPage={setPage} component={Home} />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="app-shell app-shell-login">
              <PageContent page="Login" setPage={setPage} component={Login} />
            </div>
          }
        />
        <Route
          path="/create-account"
          element={
            <div className="app-shell app-shell-login">
              <PageContent page="Login" setPage={setPage} component={Login} pageProps={{ mode: "create-account" }} />
            </div>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <div className="app-shell app-shell-login">
              <PageContent page="Login" setPage={setPage} component={Login} pageProps={{ mode: "forgot-password" }} />
            </div>
          }
        />
        {routes.map(({ path, url, component }) => (
          <Route key={url} path={url} element={<WorkspacePage page={path} component={component} />} />
        ))}
        <Route
          path="/projects/:projectName"
          element={<WorkspacePage page="Project details" component={ProjectDetails} />}
        />
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
