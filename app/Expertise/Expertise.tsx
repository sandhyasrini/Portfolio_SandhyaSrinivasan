import React from "react";
import "../globals.css";
import { about_me, skills } from "@/utils/config";

function Expertise() {
  return (
    <section id="expertise" className="my-[10rem] text-white">
      <h2 className="expertiseHeader font-semibold text-2xl sm:text-4xl text-white font-poppins tracking-[0.15rem] my-[2rem]">
        <span className="text-[#009d68] tracking-[0.15rem]">02. </span>Expertise
      </h2>
      <div className="grid md:grid-cols-2 grid-rows-2 my-[4rem] leading-8 text-justify">
        <div className="about_me px-5">
          {about_me.map((data, index) => {
            return (
              <p key={index} className="my-[1rem]">
                {data.text}
                {data.link_url && (
                  <a href={data.link_url} className="text-[#009d68]">
                    {data.link_text}
                  </a>
                )}
              </p>
            );
          })}
        </div>
        <div className="px-5">
          {skills.map((element, index) => {
            return (
              <article key={index} className="py-4">
                <p>{element.name}</p>
                <div className="h-1 w-full bg-gray-600 rounded overflow-hidden transition-all duration-200">
                  <div
                    style={{ width: `${element.skill}`, backgroundColor: `${element.color}` }}
                    className={`h-full`}
                  ></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
