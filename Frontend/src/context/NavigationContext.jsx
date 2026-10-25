import { createContext, useContext, useState } from "react";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const [page, setPage] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <NavigationContext.Provider value={{ page, setPage, mobileOpen, setMobileOpen }}>
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
