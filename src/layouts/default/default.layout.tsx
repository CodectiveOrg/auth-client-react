import { ReactElement } from "react";

import { Outlet } from "react-router";

import styles from "./default.module.css";
import HeaderComponent from "../../components/header/header.component.tsx";

export default function DefaultLayout(): ReactElement {
  return (
    <div className={styles.default}>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
      <footer>This is the footer.</footer>
    </div>
  );
}
