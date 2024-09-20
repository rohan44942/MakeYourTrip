<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";

=======
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useState } from "react";
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

<<<<<<< HEAD
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
=======
  return (
    <main className={styles.login}>
      <PageNav/>
      <form className={styles.form}>
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
<<<<<<< HEAD
          <Button type="primary">Login</Button>
=======
          <button>Login</button>
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
        </div>
      </form>
    </main>
  );
}
