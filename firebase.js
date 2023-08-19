// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk6QAVnV5WiXHhwisuia3tKWQlnBZCePs",
  authDomain: "login-771c7.firebaseapp.com",
  projectId: "login-771c7",
  storageBucket: "login-771c7.appspot.com",
  messagingSenderId: "1050389844960",
  appId: "1:1050389844960:web:8342f12cf51f3f102b9185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;