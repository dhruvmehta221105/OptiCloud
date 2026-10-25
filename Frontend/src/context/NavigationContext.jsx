import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPageFromPath, getPagePath } from "../navigation.js";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const page = getPageFromPath(location.pathname);
  const setPage = useCallback((nextPage) => {
    navigate(getPagePath(nextPage));
  }, [navigate]);
  const value = useMemo(
    () => ({ page, setPage, mobileOpen, setMobileOpen }),
    [page, setPage, mobileOpen],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
