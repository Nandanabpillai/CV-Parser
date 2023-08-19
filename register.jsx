import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register(props) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    const auth = getAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
            // ..
        });
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
            <button className = "link-btn" onClick={() => props.onFormSwitch('login')}> Already have an account? Login here</button>
        </div>
    )
}