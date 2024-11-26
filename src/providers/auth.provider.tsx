import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { UserModel } from "../models/user.model.ts";

type ContextValue = {
  loading: boolean;
  user: UserModel | null;
};

export const AuthContext = createContext<ContextValue>({
  loading: true,
  user: null,
});

type Props = PropsWithChildren;

export default function AuthProvider({ children }: Props): ReactElement {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    const verify = async (): Promise<void> => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/verify`,
        {
          credentials: "include",
        },
      );

      if (!response.ok) {
        setUser(null);
        return;
      }

      const data = await response.json();
      setUser(data.user);
    };

    verify().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user }}>
      {children}
    </AuthContext.Provider>
  );
}
