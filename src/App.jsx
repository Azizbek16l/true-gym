import {BrowserRouter, Routes, Route} from "react-router-dom"


import Home from "./Pages/Home"
import Layout from "./Pages/Layout"

import Contacts from "./Pages/Contacts"
import About from "./Pages/About"
import Adventages from "./Pages/Adventages"
import Freeclub from "./Pages/Freeclub"

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contacts/>}/>
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