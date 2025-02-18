import React from "react";

interface Props {
  id: string;
  title: string;
  isInView?: boolean;
}

export const SectionHeading = ({ id, title, isInView }: Props) => {
  return (
    <h2 className={`${isInView && 'animate-[fadeinright_1.5s_ease-in_1] expertiseHeader delay-1000 transition-all'}  font-semibold text-2xl sm:text-4xl text-white tracking-[0.15rem] my-[2rem]`}>
      <span className={` text-[#009d68] tracking-[0.15rem]`}>{id} </span>
      {title}
    </h2>
  );
};
