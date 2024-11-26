import { ReactElement } from "react";

import styles from "./dashboard.module.css";

export default function DashboardPage(): ReactElement {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
    </div>
  );
}
