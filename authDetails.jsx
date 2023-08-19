import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function AuthDetails () {
    // const [authUser, setAuthUser] = useState(null)

    // useEffect(() => {
    //     const listen = onAuthStateChanged(auth, (user => {
    //         if (user) {
    //             setAuthUser(user)
    //         }
    //         else {
    //             setAuthUser(null)
    //         }
    //     }))
    // })


    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
    return (
        <div>
            {user ? console.log('Signed') : console.log('Logged')}
        </div>
    )})
    
}