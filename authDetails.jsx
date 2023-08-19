import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import { auth } from "./firebase"
import { getAuth } from 'firebase/auth';

function AuthDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      <h2>Authentication Status</h2>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default AuthDetails;

