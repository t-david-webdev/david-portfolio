import React from 'react';
import MyBtn from '../../GlobalComponents/Buttons/MyBtn';

const HeroSection = () => {
  return (
    <div className='flex-1 overflow-y-auto relative z-[5]'>
      <div className="bg-gray-800 text-white px-6 md:px-20 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg md:mr-8 relative ">

        <img src='./src/assets/images/react-logo-green.svg' className='absolute w-48 -top-12 md:-top-420  md:left-[-100px] opacity-50 z-[4]' />
          <h1 className="font-bold text-4xl md:text-5xl mb-4 relative z-[6]">

          
            Hello, I am David, <br/>Front-end developer, <br/>WordPress developer<br/> React developer!
          </h1>
          <p className="mt-6 md:mt-10 mb-10">I'm a <strong className="text-[#2fb478]">Front-end</strong> | <strong className="text-[#37d48e]">WordPress</strong> | <strong className="text-[#33dd90]">React</strong> developer skilled in building dynamic web interfaces. 
          <img className='sm:visible md:hidden mt-[8%] rounded shadow-lg' src="https://www.moonshot.hu/wp-content/uploads/2021/08/120099233_674657189823432_101340122685957019_n.png" alt="Your Image"/>

          <br/><br/> I specialize in crafting efficient, scalable solutions using React.js. With expertise in front-end development, I turn design concepts into seamless user experiences.</p>
        
          <MyBtn btnText="React now!" href="/about" />

        </div>
        <div className="hidden md:block w-1/3">
          <img src="https://www.moonshot.hu/wp-content/uploads/2021/08/120099233_674657189823432_101340122685957019_n.png" alt="Your Image" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
