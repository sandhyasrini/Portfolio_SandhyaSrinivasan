"use client";
import React from "react";
import { Navbar, Button } from "flowbite-react";
import { navLinks } from "../../utils/config";
function NavbarComponent() {
  return (
    <Navbar fluid={true} rounded={true} className="bg-[#1e1e1e] shadow-[#1b1b1c] shadow-lg">
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-lg font-semibold text-white">
          Sandhya._
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 align-middle bg-[#1d1d1d]">
        <button
          type="button"
          onClick={() => {
            window.open("../SandhyaSrinivasan_Resume.pdf")
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
            <Navbar.Link key = {index} href={navItem.url} className="text-white hover:text-[#009d68] md:hover:text-[#009d69]">
              <span className="text-[#009d68]"> {'0'}{index + 1}. </span>
              {navItem.name}
            </Navbar.Link>
          )
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
