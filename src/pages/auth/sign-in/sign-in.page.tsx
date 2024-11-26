import { FormEvent, ReactElement, useRef, useState } from "react";
import { useNavigate } from "react-router";

import authStyles from "../auth.module.css";
import styles from "./sign-in.module.css";

export default function SignInPage(): ReactElement {
  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement>(null);

  const [error, setError] = useState<string>("");

  async function signIn(): Promise<void> {
    const formData = new FormData(formRef.current!);

    const response = await fetch("http://localhost:5001/auth/sign-in", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    await navigate("/dashboard/");
  }

  const formSubmitHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      await signIn();
      setError("");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className={styles["sign-in"]}>
      <h1>Sign In</h1>
      <form
        ref={formRef}
        className={authStyles.form}
        onSubmit={formSubmitHandler}
      >
        <label>
          Username:
          <input name="username" type="text" />
        </label>
        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form>
      {error && <p id="error">{error}</p>}
    </div>
  );
}
