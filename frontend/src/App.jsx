import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"

import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import LandingPage from "./pages/LandingPage"
import DashBoard from "./pages/Home/DashBoard"
import InterviewPrep from "./pages/Interviewprep/Interviewprep"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />  
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/interview-prep/:sessionId' element={<InterviewPrep />} />
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  )
}

export default App