import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";

console.log(styles);

const cx = classNames.bind(styles);

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const [typePassword, setTypePassword] = useState("password");

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:8081/api/v1/auth/login", {
      username,
      password,
    });
    console.log(res.data);
  };

  return (
    <div className={cx("login-container")}>
      <div className={cx("login-header")}>
        <span className={cx("header-desc")}>
          {"Don't have an account yet?"}
        </span>
        <button className={cx("btn btn-dark")}>Sign up</button>
      </div>

      <div className="login-body">
        <div className="login-wapper">
          <h2 className="login-heading">Quiz</h2>
          <p className="test">456</p>

          <div className={cx("login-content")}>
            <p className="login-title">{"Hello, who's this?"}</p>

            <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                value={username}
                type="text"
                className="form-control"
                placeholder="abc@gmail.com"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                type={typePassword}
                className="form-control"
                placeholder="Enter password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!showpassword && (
                <div
                  className=" eyes show-password"
                  onClick={() => {
                    setShowPassword(!showpassword);
                    setTypePassword("text");
                  }}
                ></div>
              )}
              {showpassword && (
                <div
                  className="eyes hide-password"
                  onClick={() => {
                    setShowPassword(!showpassword);
                    setTypePassword("password");
                  }}
                ></div>
              )}
            </div>
            <span className="forgotpasword">Forgot password?</span>
            <button
              className={cx("btn btn-dark", "btn-dark-custom", { test: false })}
              onClick={handleLogin}
            >
              Log in to Quiz
              <p>Hello</p>
            </button>
          </div>

          <p style={{ textAlign: "center", cursor: "pointer" }}>
            &#60; &#60; Go to Homepage
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
