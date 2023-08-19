import { useState, useEffect } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [user, loading, error] = useAuthState(auth);
    
    const handleSubmit = (e) => {
        // const auth = getAuth()
        // e.preventDefault();
        // console.log(auth)
        // signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;
        //     console.log(user);
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorCode, errorMessage)
        // });

        // const auth = getAuth();
        // signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     // ...
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        // });

        const logInWithEmailAndPassword = async (email, password) => {
            try {
              await signInWithEmailAndPassword(auth, email, password);
            } catch (err) {
              console.error(err);
              alert(err.message);
            }
          };
    }
    
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);
    return (
        <div className="form-container">
            <h2> Login </h2>
            <form className = 'login-form'>
                <label htmlFor = 'email'>email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email"></input>
                <label htmlFor = 'password'>password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)}type="password" id="password" name="password"></input>
                <button onClick={handleSubmit}>Login</button>
            </form>
            <button className = "link-btn" onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here</button>
        </div>
    )
}