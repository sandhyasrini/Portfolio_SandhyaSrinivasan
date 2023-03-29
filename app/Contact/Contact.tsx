'use client'
import React, {useRef} from "react";
import { SectionHeading } from "../components/SectionHeading";
import { contact_me } from "@/utils/config";
import TwitterIcon from "../components/icons/TwitterIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import EmailIcon from "../components/icons/EmailIcon";
import { useIsInViewport } from "../components/UseIsInViewPort";

function Contact() {
  const ref = useRef(null);

  const isInViewport = useIsInViewport(ref);
  return (
    <section id="contact" ref={ref} className="mt-[7rem] lg:mt-[12rem]">
      {" "}
      <SectionHeading id="04." title="Contact" isInView={isInViewport}/>
      <p className={`font-thin text-white text-lg sm:m-[4rem] text-justify ${isInViewport && 'animate-[slideup_2s_ease-in-out_1]'}`}>
        {contact_me}
        </p>
        <div className="font-semibold sm:m-[2rem] text-[#009d68]">
          <div className="flex flex-col items-center sm:flex-row justify-between text-center my-[2rem] md:m-[2rem] md:mx-[9rem] ">
            <a href="https://twitter.com/sandhya_srini" target="_blank" className="transition ease-in-out delay-100 hover:scale-110">
              <TwitterIcon />
            </a>
            <a href="https://github.com/sandhyasrini" target="_blank" className="transition ease-in-out delay-100 hover:scale-110">
              <GithubIcon />{" "}
            </a>{" "}
            <a href="https://www.linkedin.com/in/sandhyasrinivasan-1502/" target="_blank" className="transition ease-in-out delay-100 hover:scale-110">
              <LinkedinIcon />{" "}
            </a>
            <a href="mailto:sandhya_srinivasan@outlook.com" target="_blank" className="transition ease-in-out delay-100 hover:scale-110">
              <EmailIcon />
            </a>
          </div>
        </div>
    </section>
  );
}

export default Contact;
