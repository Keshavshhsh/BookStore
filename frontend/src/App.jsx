import React from "react";
import "./index.css";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import {Route,Routes} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login"
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/course" element={<Courses />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />
      </Routes>

    </div>
      
    </>
  );
}

export default App;
