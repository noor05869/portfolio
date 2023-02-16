import React from "react";
import About from "../components/About/About";
import Contact from "../components/contact/Contact";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <Projects />
      <About />
      <Contact />{" "}
    </div>
  );
};

export default LandingPage;
