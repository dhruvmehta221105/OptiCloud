import { Sidebar } from "./Sidebar.jsx";
import { Topbar } from "./Topbar.jsx";
import { useNavigation } from "../../context/NavigationContext.jsx";

export function WorkspaceLayout({ children }) {
  const { page, setPage, mobileOpen, setMobileOpen } = useNavigation();
  const closeMobile = () => setMobileOpen(false);
  const goHome = () => setPage("Home");

  return (
    <>
      <Sidebar page={page} mobileOpen={mobileOpen} closeMobile={closeMobile} />
      <div className="main-column">
        <Topbar page={page} onMenu={() => setMobileOpen(true)} onHome={goHome} />
        <main className="main-content">{children}</main>
      </div>
    </>
  );
}
