import { useState } from "react"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from "./UserAuthContext";
import './index.css'

export default function Index() {
  const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    const [err, setErr] = useState('')
    const { signUp } = useUserAuth()
    const navigate = useNavigate()
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr("")
        try {
            await signUp(email, pass)
            navigate("/")
        } catch(err) {
            setErr(err.message)
        }
    }
  return (
    <div>
        <div className="signup-signup">
          <span className="signup-text"><span>Roll the Carpet.!</span></span>
          <img
            src="/external/ellipse118-5gv-400h.png"
            alt="Ellipse118"
            className="signup-ellipse1"
          />
          <img
            src="/external/ellipse219-evi-300h.png"
            alt="Ellipse219"
            className="signup-ellipse2"
          />
          <form className="signup-container" onSubmit={handleSubmit}>
          <div className="signup-frame2">
            <div className="signup-frame5">
              <div className="signup-frame4">
                <div className="signup-upper-section">
                  <div className="signup-logintext">
                    <span className="signup-text02"><span>Signup</span></span>
                    <span className="signup-text04">
                      <span>Just some details to get you in.!</span>
                    </span>
                  </div>
                  <div className="signup-credentials">
                    <div className="signup-username">
                      <span className="signup-text06"> 
                      <label htmlFor = 'name'>user name</label>  
                <input value = {name} onChange={(e) => setName(e.target.value)} id="name" name="name"></input></span>
                    </div>
                    <div className="signup-username1">
                      <span className="signup-text08">
                        <label htmlFor = 'email'>email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email"></input>
                      </span>
                    </div>
                    <div className="signup-password-rem">
                      <div className="signup-password">
                        <span className="signup-text10"><label htmlFor = 'password'>password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password"></input></span>
                      </div>
                    </div>
                    <div className="signup-loginbt-fp">
                      <div className="signup-login">
                        <span className="signup-text14"><button className = 'r' type="submit"> Register </button></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="signup-otherlogins">
                  <div className="signup-or">
                    <img
                      src="/external/line1137-s20k.svg"
                      alt="Line1137"
                      className="signup-line1"
                    />
                    <span className="signup-text16"><span>Or</span></span>
                    <img
                      src="/external/line2139-hof9.svg"
                      alt="Line2139"
                      className="signup-line2"
                    />
                  </div>
                </div>
              </div>
              <div className="signup-frame9">
                <span className="signup-text18">
                  <span>Already Registered? <Link to = "/">Login here</Link></span>
                </span>
              </div>
            </div>
          </div>
          </form>
          <img
            src="/external/line3161-tf3h.svg"
            alt="Line3161"
            className="signup-line3"
          />
        </div>
      </div>
  );
}

