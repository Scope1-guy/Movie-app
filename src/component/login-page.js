import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { savedUsers } from "../data/users";

export function LoginPage() {
  const [mode, setMode] = useState("login");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleLoginSubmit(e) {
    e.preventDefault();

    if (
      userEmail === savedUsers.email &&
      userPassword === savedUsers.password
    ) {
      console.log("login succefully");
    } else {
      console.log("error");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>ScopeHub</h1>
        <p>Your Favourite Movies, all in one place</p>

        <div className="auth-tabs">
          <button
            className={mode === "login" ? "auth-tab active" : "auth-tab"}
            onClick={() => setMode("login")}
          >
            Log in
          </button>
          <button
            className={mode === "signup" ? "auth-tab active" : "auth-tab"}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <form
          className="auth-form"
          onSubmit={mode === "login" ? handleLoginSubmit : ""}
        >
          <h2>{mode === "signup" ? "Sign up to ScopeHub" : "Welcome Back"}</h2>
          {mode === "signup" && (
            <div className="auth-field">
              <label>Email</label>
              <input
                type="text"
                placeholder="ayanfe1@yahoo.com"
                value={(e) => setUserEmail(e.target.value)}
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="********"
                value={(e) => setUserPassword(e.target.value)}
              />
            </div>
          )}

          <div className="auth-field">
            <label>Email</label>
            <input type="text" placeholder="ayanfe1@yahoo.com" />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="auth-submit">
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
