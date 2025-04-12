import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/Technologies";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Contact />
    </div>
  );
};

export default App;
