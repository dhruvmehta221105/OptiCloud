import { Sidebar } from "./Sidebar.jsx";
import { Topbar } from "./Topbar.jsx";

export function WorkspaceLayout({ page, setPage, mobileOpen, setMobileOpen, children }) {
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <Sidebar page={page} setPage={setPage} mobileOpen={mobileOpen} closeMobile={closeMobile} />
      <div className="main-column">
        <Topbar page={page} onMenu={() => setMobileOpen(true)} />
        <main className="main-content">{children}</main>
      </div>
    </>
  );
}
