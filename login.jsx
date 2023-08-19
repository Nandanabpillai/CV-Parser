import { useState, useEffect } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useUserAuth } from "./UserAuthContext";

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const auth = getAuth()
    const [err, setErr] = useState("")
    const navigate = useNavigate()
    const { logIn } = useUserAuth

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setErr("")
        // try {
        //     await logIn(email, pass)
        //     console.log(email)
        //     navigate("/home")
        // } catch(err) {
        //     setErr(err.message)
        // }
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
        <div className="form-container">
            <h2> Login </h2>
            <form className = 'login-form' onSubmit={handleSubmit}>
                <label htmlFor = 'email'>email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email"></input>
                <label htmlFor = 'password'>password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)}type="password" id="password" name="password"></input>
                <button type="submit">Login</button>
            </form>
            <button className = "link-btn"> Don't have an account? <Link to = "/signup">Register here</Link></button>
        </div>
    )
}