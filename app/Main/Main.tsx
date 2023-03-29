"use client";
import React, { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import NavbarComponent from "../components/NavbarComponent";
import SideBarRight from "../components/SideBarRight";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Expertise from "../Expertise/Expertise";
import Landing from "../Landing/Landing";
import styles from '../page.module.css'

function Main() {
  const [showNav, setShowNav] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    scrollPosition < window.scrollY
      ? (setScrollPosition(window.scrollY), setShowNav(false))
      : (setScrollPosition(window.scrollY), setShowNav(true));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div>
      <NavbarComponent showNav={showNav}/>
      <div className={styles.main}>
      <Landing  />
      <Expertise />
      <Experience />
      <Blogs />
      <Contact />
      </div>
    </div>
  );
}

export default Main;
