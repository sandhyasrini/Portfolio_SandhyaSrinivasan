import React from "react";
import styles from "./landing.module.css";
import { description } from "@/utils/config";

export default function Landing() {
  return (
    <>
      <div
        id="Home"
        className={`${styles.landing} font-bold text-4xl sm:text-6xl text-white`}
      >
        <h1>Hi,</h1>
        <h1>
          I&#39;m{" "}
          <span className="text-[rgb(255,38,0)] shadow-lg font-bold">S</span>
          andhya,
        </h1>
        <h1>a Full Stack developer</h1>
      </div>
      <p
        className={`font-thin text-lg text-white my-[4rem] mx-0 ${styles.description}`}
      >
        {description}
      </p>
      <button
          type="button"
          className="text-[#009d68] w-[30%] text-[10px] sm:text-lg h-[100%] md:w-[20%] transition ease-in-out delay-150 bg-gray border border-[#009d68] focus:outline-none hover:bg-[#009d68] hover:text-white focus:ring-4 hover:-translate-y-1 hover:scale-110 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 align-middle"
        >
          Contact me!
        </button>    </>
  );
}
