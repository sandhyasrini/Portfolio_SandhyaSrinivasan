'use client';
import React, { useRef } from 'react';
import { skills } from '@/utils/config';
import { useIsInViewport } from './UseIsInViewPort';

function ProgressBarComponent() {
  const ref = useRef(null);

  const isInViewport1 = useIsInViewport(ref);
  return (
    <div className='px-0 sm:px-5 mt-[4rem] sm:mt-0' ref={ref}>
      {skills.map((element, index) => {
        return (
          <article key={index} className='py-4 font-calibre'>
            <p>{element.name}</p>
            <div
              className={`h-2 w-full bg-gray-600 rounded overflow-hidden delay-[${
                index + 1
              }'00ms']`}
            >
              <div
                style={{
                  width: `${element.skill}`,
                }}
                className={`h-full`}
              >
                <div
                  style={{ backgroundColor: `${element.color}` }}
                  className={`w-[100%] h-full ${isInViewport1 && 'animate-progress-slide'}`}
                ></div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProgressBarComponent;
