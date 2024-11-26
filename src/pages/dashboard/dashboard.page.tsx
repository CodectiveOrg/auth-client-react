import { ReactElement, useContext } from "react";

import styles from "./dashboard.module.css";
import { AuthContext } from "../../providers/auth.provider.tsx";

export default function DashboardPage(): ReactElement {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
