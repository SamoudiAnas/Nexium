export const isDashboardLayout = (pathname: string) => {
  const isAuthRoute = pathname === "/login";
  const isDashboardRoute = pathname.startsWith("/admin");

  return isAuthRoute || isDashboardRoute;
};

export const isCommonLayout = (pathname: string) => {};
