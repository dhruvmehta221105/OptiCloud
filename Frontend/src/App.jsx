import { NavigationProvider, useNavigation } from "./context/NavigationContext.jsx";
import { WorkspaceLayout } from "./components/layout/WorkspaceLayout.jsx";
import { routes, defaultRoute } from "./routes.jsx";

function AppShell() {
  const { page, setPage, mobileOpen, setMobileOpen } = useNavigation();
  const Route = routes.find((r) => r.path === page)?.component || routes.find((r) => r.path === defaultRoute)?.component;

  return (
    <div className="app-shell">
      <WorkspaceLayout page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}>
        <Route setPage={setPage} />
      </WorkspaceLayout>
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
