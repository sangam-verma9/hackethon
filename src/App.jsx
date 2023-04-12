import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import  Home  from "./Home";
import Learn from "./Learn"
import About from "./About"
import Footer from "./Footer";
import Login from "./Login";
import Learnstart from "./Learnstart";
import Pyq from "./Pyq";
import Content from "./Content";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Register from "./Register";
import Discussion from "./Discussion";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
const App =()=>{
  return(
    <> <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hackethon" element={<Home/>} />
        <Route path="/learn" element={<Learn/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/learnstart" element={<Learnstart/>} />
        <Route path="/pyq" element={<Pyq/>} />
        <Route path="/discussion" element={<Discussion/>} />
        <Route path="/content" element={<Content/>} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App;