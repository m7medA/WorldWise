import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();
  const { login, isAuth } = useAuth();
  const [email, setEmail] = useState("Mohamed@example.com");
  const [password, setPassword] = useState("3mani");

  function handelLogin(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(() => {
    if (isAuth) navigate("/app", { replace: true });
  }, [isAuth]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handelLogin}>
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
          <Button>Login</Button>
        </div>
      </form>
    </main>
  );
}

export default Login;
