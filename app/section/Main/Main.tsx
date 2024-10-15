"use client";
import React, { useEffect, useState } from "react";
import Blogs from "../../Blogs/Blogs";
import NavbarComponent from "@/app/common/components/NavbarComponent";
import Contact from "@/app/section/Contact/Contact";
import Experience from "@/app/section/Experience/Experience";
import Expertise from "@/app/section/Expertise/Expertise";
import Landing from "@/app/section/Landing/Landing";
import styles from '../../page.module.css'

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
      <div className={`${styles.main} md:p-[4rem] px-9 py-[4rem]`}>
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
