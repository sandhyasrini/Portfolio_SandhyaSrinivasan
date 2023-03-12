import React from "react";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Expertise from "../Expertise/Expertise";
import Landing from "../Landing/Landing";

function Main() {
   function handleScroll() {

   }
  return (
    <div>
      <Landing />
      <Expertise />
      <Experience />
      <Contact />
    </div>
  );
}

export default Main;
