import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/Technologies";
import Projects from "./components/Projects";
import Connect from "./components/Connect";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Connect />
    </div>
  );
};

export default App;
