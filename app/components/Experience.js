import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export const Experience = () => {
  const [counterOn, setCounterOn] = useState(false)
    return (
      <div class=" py-16  sm:max-w-xl md:max-w-full">
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-2">
          <div class="text-center md:border-r">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-gray-200">
            {counterOn ? <CountUp  end={10} duration={5}  /> : 0}+
            
              
              </h6>
              </ScrollTrigger>
            <p class="text-sm font-medium tracking-widest text-gray-200 uppercase lg:text-base">
            years Of Experience
            </p>
          </div>
          <div class="text-center md:border-r">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-gray-200">
            {counterOn ? <CountUp  end={200} duration={15}  /> : 0}+
           
              </h6>
              </ScrollTrigger>
            <p class="text-sm font-medium tracking-widest text-gray-200 uppercase lg:text-base">
            Completed projects
            </p>
          </div>
      
        </div>
      </div>
    );
  };