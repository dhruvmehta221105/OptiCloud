import { AnimatePresence, motion } from "framer-motion";
import { NavigationProvider, useNavigation } from "./context/NavigationContext.jsx";
import { WorkspaceLayout } from "./components/layout/WorkspaceLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { routes, defaultRoute, getProjectRoute } from "./routes.jsx";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12, transition: { duration: 0.15 } },
};

function AppShell() {
  const { page, setPage, mobileOpen, setMobileOpen } = useNavigation();

  if (page === "Home") {
    return <div className="app-shell app-shell-landing"><Home setPage={setPage} /></div>;
  }

  const Route = getProjectRoute(page)?.component || routes.find((r) => r.path === page)?.component || routes.find((r) => r.path === defaultRoute)?.component;

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
          <WorkspaceLayout page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}>
            <Route setPage={setPage} />
          </WorkspaceLayout>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppShell />
    </NavigationProvider>
  );
}
