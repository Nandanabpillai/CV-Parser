import Index from './index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './login'
import ProtectedRoute from './ProtectedRoute'
import { UserAuthContextProvider } from './UserAuthContext'
import Upload from './upload'

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
          <Route path = '/' element = {<LoginPage />} />
          <Route path = '/signup' element = {<Index />} />
        </Routes>
        </UserAuthContextProvider>
      </div>
    )
  }
  
  export default App