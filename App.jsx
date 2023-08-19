import react, {useState} from 'react'
import Register from './register'
import Login from './login'
import Home from './home'
import app from './firebase'
import AuthDetails from './authDetails'
import Upload from './upload'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [curr, setCurr] = useState('login')

    const toggleForm = (formName) => {
        setCurr(formName)
    }
    return (
      <div className='app'>
        {/* { curr === 'login' ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm} />}
        <AuthDetails /> */}
      <Upload />
      </div>
    )
  }
  
  export default App