import React from "react";
import Navigation from "./Navigation";

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header>
      <h1>Daniel Gonzalez</h1>
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </header>
  );
};

export default Header;