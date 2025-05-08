import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from 'react'

import Home from "./pages/home"
import Layout from "./pages/layout"
import Contact from './pages/contact'
import About from "./pages/about"
import Adventage from "./pages/adventages"
import Freeclub from "./pages/freeclub"
import Adventages from "./pages/adventages"
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="freeclub" element={<Freeclub/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="adventages" element={<Adventages/>}/>

        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
