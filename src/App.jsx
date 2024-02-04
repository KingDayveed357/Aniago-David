// import React from 'react'

// import "./App.css";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import {Routes, Route} from "react-router-dom"
import Both from './Components/Both';
import useDarkmode from "./Components/useDarkmode";
import Projects from './pages/projects';

const App = () => {
  useDarkmode();
  return (
    <div className="dark:bg-[#0d2338] dark:text-[#ffffff]">
 <Routes>
  <Route path='/' element={<Both/>}>    
  <Route path='/' element={<Home/>}/> 
  <Route path='/projects' element={<Projects/>}/> 
  <Route path='/about' element={<About/>}/> 
  <Route path='/contact' element={<Contact/>}/> 
  </Route>
  </Routes>
    </div>
  )
}

export default App