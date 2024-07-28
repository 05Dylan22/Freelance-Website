import React from "react"
import { Route, Routes } from "react-router"
import HomePage from "./Pages/HomePage"
import SignUp from "./Pages/SignUp"
import FreelancerMain from "./Pages/FreelancerMain"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/free" element={<FreelancerMain/>}/>
      </Routes>
    </>
  )
}

export default App