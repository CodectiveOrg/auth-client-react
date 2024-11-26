import { ReactElement, useContext } from "react";
import { Navigate, Outlet } from "react-router";

import { AuthContext } from "../providers/auth.provider.tsx";

export default function AuthGuard(): ReactElement {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth/sign-in" />;
  }

  return <Outlet />;
}
