import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch((error) => alert(error.message));
  };

  const register = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use &amp;
          Sale.
        </p>

        <button type="button" className="login__registerButton" onClick={register}>
          Create your eShop Account
        </button>
      </div>
    </div>
  );
}

export default Login;
