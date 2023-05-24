import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, signIn, signOut } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value;
    //login later

    signIn(login, password).then(() => navigate("/dashboard"));
  };

  const handleGoToHomePage = () => {
    navigate("/");
  };

  useLayoutEffect(() => {
    if (user) navigate("/dashboard");
  }, []);
  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label>
          Login
          <input type="text" name="login" value={"dev@dev.com"} readOnly />
        </label>
        <label>
          Password
          <input type="password" name="password" value={"dev123"} readOnly />
        </label>
        <br />
        <button onClick={handleGoToHomePage}>Return</button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
