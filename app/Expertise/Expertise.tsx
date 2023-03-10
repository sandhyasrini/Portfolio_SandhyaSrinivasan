import React from "react";
import "../globals.css";
import { about_me } from "@/utils/config";
import ProgressBarComponent from "../components/ProgressBarComponent";
import { SectionHeading } from "../components/SectionHeading";

function Expertise() {
  return (
    <section id="expertise" className="mt-[10rem] sm:my-[10rem] text-white">
    <SectionHeading id="02." title="Expertise" />
      <div className="grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 mt-[4rem] sm:my-[4rem] leading-8 text-justify">
        <div className="about_me px-0 sm:px-5">
          {about_me.map((data, index) => {
            return (
              <p key={index} className="my-[1rem] font-thin text-md">
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
        <ProgressBarComponent />
      </div>
    </section>
  );
}

export default Expertise;
