import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Home1 from "./components/Home1"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Category from "./components/Category"
import Contact from "./components/Contact"
import SinglePost from './components/SinglePost'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/Home1" element={<Home1 />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SinglePost" element={<SinglePost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App