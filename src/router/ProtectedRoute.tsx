import { Navigate, useLocation } from "react-router-dom";

import type { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { user } from "../atoms/agencyBanking";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const userData = useRecoilValue(user);

  const isAuthenticated = userData && userData.name;
  const isRootPath = location.pathname === "/";

  if (!isRootPath && !isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
