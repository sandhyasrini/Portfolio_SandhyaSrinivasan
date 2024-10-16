"use client";
import React from "react";
import "../../globals.css";
import { description, intro } from "@/utils/config";


export default function Landing() {
  const chars = [...intro];

  return (
    <section className="h-[85vh] flex flex-col mx-0 sm:mx-[3rem] my-[6rem] align-middle justify-center">
      <div
        id="Home"
        className={`landing font-bold text-3xl sm:text-6xl text-white font-calibre`}
      >
        <h1 className="animate-slide-up">
          {chars.map((char, index) => {
            if (char === "*") {
              return;
            } else if (char === " ") {
              return <span key={index}> </span>;
            }

            return chars[index - 1] === "*" ? (
              <span
                className={`text-[#fd2155] font-bold inline-block hover:animate-rubber-band `}
                key={index}
              >
                {char}
              </span>
            ) : (
              <span
                className={`hover:animate-rubber-band hover:text-[#009d68] ${
                  char !== "#" && "inline-block"
                }`}
                key={index}
              >
                {char === "#" ? (
                  <br className="ease-linear delay-1000" />
                ) : (
                  char
                )}
              </span>
            );
          })}
        </h1>
      </div>
      <div>
        <p
          className={`font-thin delay-1000 transition-all overflow-hidden w-[100%] text-lg text-white my-[4rem] mx-0 description text-justify animate-[slideup_3s_ease-in-out_1]`}
        >
          {description}
        </p>
      </div>
      <a
        href="/#contact"
        className="text-[#009d68] w-[50%] text-[0.5rem] sm:w-[40%] sm:text-[1rem] sm:text-lg  md:w-[20%] transition ease-in-out delay-150 bg-gray border border-[#009d68] focus:outline-none hover:bg-[#009d68] hover:text-white focus:ring-4 hover:-translate-y-1 hover:scale-110 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 align-middle text-center font-calibre"
      >
        Contact me!
      </a>{" "}
    </section>
  );
}
