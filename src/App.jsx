import React, { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}

export default App;
