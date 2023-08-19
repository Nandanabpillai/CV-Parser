import react, {useState} from 'react'
import Register from './register'
import Login from './login'
import Home from './home'
import app from './firebase'
import AuthDetails from './authDetails'
import Upload from './upload'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import { UserAuthContextProvider } from './UserAuthContext'


function App() {
    return (
      <div className='app'>
        {/* { curr === 'login' ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm} />} */}
      {/* <Upload /> */}
      <UserAuthContextProvider>
        <Routes>
        <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
          <Route path = '/' element = {<Login />} />
          <Route path = '/signup' element = {<Register />} />
        </Routes>
        </UserAuthContextProvider>
      </div>
    )
  }
  
  export default App