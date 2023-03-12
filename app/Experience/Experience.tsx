"use client";

import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Accordion } from "flowbite-react";
import { experience } from "@/utils/config";
import LocationIcon from "../components/icons/LocationIcon";

function Experience() {
  return (
    <section id="experience" className=" text-white mt-[-10rem] sm:mt-[-2rem]">
      <SectionHeading id="03." title="Experience" />
      <div className="flex flex-row justify-center mt-[3rem]">
        <Accordion collapseAll={true} className="w-[100%] lg:w-[80%]">
          {experience.map((data, index) => {
            return (
              <Accordion.Panel key={index}>
                <Accordion.Title className="w-[100%]">
                  <span className="flex flex-row w-[100%] justify-between">
                    <span>{data.title}</span>
                  </span>
                </Accordion.Title>
                <Accordion.Content>
                  <span>
                    <LocationIcon />{" "}
                    <span className="text-[#009d68] font-semibold">
                      {data.location}
                    </span>
                  </span>
                  <p className="my-3 text-gray-500 dark:text-gray-400">
                    {data.summary}
                  </p>
                  <p className="grid sm:grid-flow-col grid-flow-row my-[2rem] text-center justify-center">
                    {data.stacks_used.map((skill, ind) => {
                      return (
                        <span
                          key={ind}
                          className=" border-[1px] border-[#EF7C8E] rounded-2xl text-white font-semibold m-[1rem] p-2 text-sm text-thin"
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

export default Experience;
