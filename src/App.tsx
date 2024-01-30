import React from "react"
import HomeHero from "./PageElements/HomeHero"
import { Route, Routes } from "react-router"
import HomePageNav from "./PageElements/HomePageNav"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageNav/>}/>
      </Routes>
    </>
  )
}

export default App