import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
//import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import './style.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState("About Me");

  const renderSection = () => {
    switch (currentSection) {
      case "About Me":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
};

export default App;