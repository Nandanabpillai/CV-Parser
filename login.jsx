import React from 'react';
import './style.css'; // Make sure to import your stylesheet(s)
import './login.css'
import { useState, useEffect } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useUserAuth } from "./UserAuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState("")
    const navigate = useNavigate()
    const { logIn } = useUserAuth
      const auth = getAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate('/home')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    };
  return (
    <div>

      <div className="login-container">
        <div className="login-login">
          <span className="login-text"><span>Welcome Back .!</span></span>
          <img
            src="/external/ellipse1166-wiqo-400h.png"
            alt="Ellipse1166"
            className="login-ellipse1"
          />
          <img
            src="/external/ellipse2167-fv9m-300h.png"
            alt="Ellipse2167"
            className="login-ellipse2"
          />
          <form className = 'login-form' onSubmit={handleSubmit}>
          <div className="login-frame2">
            <div className="login-frame5">
              <div className="login-frame4">
                <div className="login-upper-section">
                  <div className="login-logintext">
                    <span className="login-text02"><span>Login</span></span>
                    <span className="login-text04">
                      <span>Glad you’re back.!</span>
                    </span>
                  </div>
                  <div className="login-credentials">
                  {/*<label htmlFor = 'email'>email</label>*/}
                    <div className="login-username">
                      <span className="login-text06">
                        <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="Email" placeholder="email"></input>
                      </span>
                    </div>
                    <div className="login-password-rem">
                      <div className="login-password">
                        <span className="login-text08">
                        <input value = {pass} onChange={(e) => setPass(e.target.value)}type="password" id="password" name="Password'></input></span>
                        <img
                          src="/external/closedeye181-apii.svg"
                          alt="closedeye181"
                          className="login-closedeye"
                        />
                      </div>
                    </div>
                    <div className="login-loginbt-fp">
                      <div className="login-login1">
                        <span className="login-text12"><button className = 'l' type = 'submit'>Login</button></span>
                      </div>
                  </div>
                </div>
              </div>
              
              <div className="login-frame9">
                <span className="login-text16">
                  <span>Don’t have an account ? <Link to = "/signup">Register here</Link></span>
                </span>
              </div>
            </div>
          </div>
          </div>
          </form>
          <img
            src="/external/line31031-fuot7.svg"
            alt="Line31031"
            className="login-line3"
          />
        </div>
      </div>
    </div>
  );
}

