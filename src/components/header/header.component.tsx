import { ReactElement } from "react";

import styles from "./header.module.css";
import { NavLink } from "react-router";

export default function HeaderComponent(): ReactElement {
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
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
