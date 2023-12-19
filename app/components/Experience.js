import CountUp from 'react-countup';

export const Experience = () => {
    return (
      <div class=" py-16  sm:max-w-xl md:max-w-full">
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-2">
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-gray-200">
            
              <CountUp duration={5} end={10} />
              +
              </h6>
            <p class="text-sm font-medium tracking-widest text-gray-200 uppercase lg:text-base">
            years Of Experience
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-gray-200">
            <CountUp duration={15} end={300} />
              +</h6>
            <p class="text-sm font-medium tracking-widest text-gray-200 uppercase lg:text-base">
            Completed projects
            </p>
          </div>
      
        </div>
      </div>
    );
  };