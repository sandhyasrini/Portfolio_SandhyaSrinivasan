import React from 'react'
import { skills } from '@/utils/config';

function ProgressBarComponent() {
  return (
    <div className="px-0 sm:px-5 mt-[4rem] sm:mt-0">
    {skills.map((element, index) => {
      return (
        <article key={index} className="py-4">
          <p>{element.name}</p>
          <div className="h-2 w-full bg-gray-600 rounded overflow-hidden">
            <div
              style={{ width: `${element.skill}`, backgroundColor: `${element.color}` }}
              className={`h-full transition-[background-color] ease-in-out duration-200`}
            ></div>
          </div>
        </article>
      );
    })}
  </div>
  )
}

export default ProgressBarComponent