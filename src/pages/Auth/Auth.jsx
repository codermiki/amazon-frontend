import React, { useState, useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import amazon from "./amazon-logo.png";
import classes from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import { ClipLoader } from "react-spinners";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ACTION } from "../../Utility/action.type";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);
  const navigate = useNavigate();

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    // firebase auth
    if (e.target.name === "signIn") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: ACTION.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });

      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: ACTION.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  return (
    <>
      <section className={classes.login}>
        {/* link with amazone logo */}
        <Link to="/">
          <img src={amazon} alt="amazon logo" />
        </Link>
        {/* form */}
        <div className={classes.login__container}>
          <h1>Sign In</h1>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button
              onClick={authHandler}
              className={classes.login__signInButton}
              name="signIn"
            >
              {loading.signIn ? (
                <ClipLoader color="#000" size={15} />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Condition of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          {/* create account button */}
          <button
            onClick={authHandler}
            className={classes.login__registerButton}
            name="signUp"
          >
            {loading.signUp ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Create your Amazon Account"
            )}
          </button>
          {error && (
            <small
              style={{
                paddingTop: "5px",
                color: "red",
              }}
            >
              {error}
            </small>
          )}
        </div>
      </section>
    </>
  );
};

export default Auth;
