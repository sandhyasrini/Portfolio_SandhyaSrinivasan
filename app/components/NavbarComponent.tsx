"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Button } from "flowbite-react";
import { navLinks } from "../../utils/config";
interface Props {
  showNav: boolean;
}
function NavbarComponent({ showNav }: Props) {
  return (
    <div className={`bg-[#1e1e1e] shadow-[#1b1b1c] shadow-lg visible ${showNav ? 'md:visible md:transition-[visibility] md:ease-in  delay-200 animate-slide-up' : 'md:invisible md:ease-out md:transition-width transition-width delay-[250ms] animate-slide-up'}`}>
      <Navbar
        fluid={true}
        rounded={true}
        className="bg-[#1f1f1f] shadow-[#1b1b1c] shadow-lg fixed top-0 w-[100%] transform transition-all duration-150 ease-out scale-100"
      >
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-lg font-semibold text-[#fd2155]">
            Sandhya._
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 align-middle">
          <button
            type="button"
            onClick={() => {
              window.open("../SandhyaSrinivasan_Resume.pdf");
            }}
            className="text-[#009d68] h-[100%] transition ease-in-out delay-150 bg-gray border border-[#009d68] focus:outline-none hover:bg-[#009d67] hover:text-white focus:ring-4 hover:-translate-y-1 hover:scale-110 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 align-middle"
          >
            Resume
          </button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="md:hover:text-[#009d68]">
          {navLinks.map((navItem, index) => {
            return (
              <Navbar.Link
                key={index}
                href={navItem.url}
                className=" w-[100%] text-white inline-block hover:text-[#009d68] md:hover:text-[#009d69] animate-[slideinMobile_1s_ease-in_1] md:animate-slide-in"
              >
                {navItem.name}
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
