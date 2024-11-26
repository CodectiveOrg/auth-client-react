import { ReactElement, useContext } from "react";

import styles from "./header.module.css";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../providers/auth.provider.tsx";

export default function HeaderComponent(): ReactElement {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  async function signOut(): Promise<void> {
    const response = await fetch("http://localhost:5001/auth/sign-out", {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    await navigate("/");
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Auth + React</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <button onClick={signOut}>Sign Out</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/auth/sign-in">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/auth/sign-up">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
