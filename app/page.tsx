import Main from "./components/Main"
import About from "./about/page";
import Contact from "./contact/page"
import Project from "./project/page"
import Login from "./login/page"
import dashboard from "./dashboard/page"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function Home() {
  return (
    <>
    
    
    <Main />
    <div id="about">
    <About />
    </div>

    <div id="contact">
<Contact />
    </div>

    <div id="Project">
      <Project />

    </div>
      
  </>
  );
};

