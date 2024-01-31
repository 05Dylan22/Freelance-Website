import React from "react"
import HomeHero from "./PageElements/HomeHero"
import { Route, Routes } from "react-router"
import HomePage from "./Pages/HomePage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App