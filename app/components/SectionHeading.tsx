import React from 'react'
import { SectionName } from '../types'

export const SectionHeading: React.FC<SectionName> = ({id, title}) => {
  return (
    <h2 className="expertiseHeader font-semibold text-2xl sm:text-4xl text-white tracking-[0.15rem] my-[2rem]">
    <span className="text-[#009d68] tracking-[0.15rem]">{id} </span>{title}
  </h2>  )
}

