import { ReactElement, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function AuthGuard(): ReactElement {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  useEffect(() => {
    const verify = async (): Promise<void> => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/verify`,
        {
          credentials: "include",
        },
      );

      if (!response.ok) {
        setIsAuthenticated(false);
        return;
      }

      setIsAuthenticated(true);
    };

    verify().then();
  }, []);

  if (isAuthenticated === undefined) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" />;
  }

  return <Outlet />;
}
