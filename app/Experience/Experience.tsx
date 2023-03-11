"use client";

import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Accordion } from "flowbite-react";
import { experience } from "@/utils/config";

function Experience() {
  return (
    <section id="experience" className=" text-white">
      <SectionHeading id="03." title="Experience" />
      <div className="flex flex-row justify-center mt-[3rem]">
        <Accordion alwaysOpen={false} className="w-[100%] sm:w-[80%]">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-4 h-6 inline text-[#009d68]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>{" "}
                    <span className="text-[#009d68] font-semibold">
                    {data.location}
                    </span>
                  </span>
                  <p className="my-3 text-gray-500 dark:text-gray-400">
                    {data.summary}
                  </p>
                  <p className="flex flex-col md:flex-row my-[2rem] text-center">
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
