import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from "./UserAuthContext";

export default function Register(props) {
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
        // createUserWithEmailAndPassword(auth, email, pass)
        // .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     alert(errorCode, errorMessage);
        //     // ..
        // });
    }

    return (
        <div className="form-container">
            <h2> Register </h2>
            <form className = 'reg-form' onSubmit={handleSubmit}>
                <label htmlFor = 'name'>user name</label>
                <input value = {name} onChange={(e) => setName(e.target.value)} id="name" name="name"></input>
                <label htmlFor = 'email'>email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email"></input>
                <label htmlFor = 'password'>password</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password"></input>
                <button type="submit"> Register </button>
            </form>
            <button className = "link-btn"> Already have an account? <Link to = "/">Login here</Link></button>
        </div>
    )
}