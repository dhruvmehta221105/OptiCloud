export const pagePaths = {
  Home: "/",
  Dashboard: "/dashboard",
  Projects: "/projects",
  Developers: "/developers",
  "Connect Infrastructure": "/connect-infrastructure",
  Analyses: "/analyses",
  Costs: "/costs",
  Settings: "/settings",
  Documentation: "/documentation",
};

export function getPagePath(page) {
  if (page.startsWith("Project:")) {
    return `/projects/${encodeURIComponent(page.slice("Project:".length))}`;
  }

  return pagePaths[page] || "/";
}

export function getPageFromPath(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const staticPage = Object.entries(pagePaths).find(([, path]) => path === normalizedPath)?.[0];
  if (staticPage) return staticPage;

  const projectMatch = normalizedPath.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    try {
      return `Project:${decodeURIComponent(projectMatch[1])}`;
    } catch {
      return "Projects";
    }
  }

  return "Home";
}
