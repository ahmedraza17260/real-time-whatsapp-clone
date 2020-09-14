/* eslint-disable no-unused-vars */
import { Button } from "@material-ui/core";
import { auth, provider, providerFb } from "./firebase";
import React from "react";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  const signInFb = () => {
    auth
      .signInWithPopup(providerFb)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
          alt=""
        />

        <div className="login__text">
          <h1>Sign in to Chat Application</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign with Google
        </Button>
        <br />
        <Button type="submit" onClick={signInFb}>
          Sign with Facebook
        </Button>
      </div>
    </div>
  );
}

export default Login;
