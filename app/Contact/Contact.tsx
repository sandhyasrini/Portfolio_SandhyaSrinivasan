import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { contact_me } from "@/utils/config";
import TwitterIcon from "../components/icons/TwitterIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import EmailIcon from "../components/icons/EmailIcon";

function Contact() {
  return (
    <section id="contact" className="mt-[15rem]">
      {" "}
      <SectionHeading id="04." title="Contact" />
      <p className="font-thin text-white text-lg m-[4rem]">
        {contact_me}
        <div className="font-semibold sm:m-[2rem] text-[#009d68]">
          <div className="flex flex-col sm:flex-row justify-between text-center md:m-[2rem] md:mx-[9rem] ">
            <a href="https://twitter.com/sandhya_srini" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://github.com/sandhyasrini" target="_blank">
              <GithubIcon />{" "}
            </a>{" "}
            <a href="https://www.linkedin.com/in/sandhyasrinivasan-1502/" target="_blank">
              <LinkedinIcon />{" "}
            </a>
            <a href="mailto:sandhya_srinivasan@outlook.com" target="_blank">
              <EmailIcon />
            </a>
          </div>
        </div>
      </p>
    </section>
  );
}

export default Contact;
