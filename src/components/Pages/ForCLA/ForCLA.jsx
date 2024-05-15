import React, { useState } from 'react';
import HeroSection from '../../GlobalComponents/Hero/HeroComp';
import { ForClaHeroData } from '../../GlobalComponents/MiniDBs/miniDB';

import './forCLAstyle.css'

function ForCLA() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };

  return (
    <>

<HeroSection
        title={ForClaHeroData.title}
        subtitle={ForClaHeroData.subtitle}
        backgroundImage={ForClaHeroData.backgroundImage}
        overlayColor={ForClaHeroData.overlayColor}
      />

      <section className='flex flex-row content-center w-full mt-[-5%] mb-[5%] z-10 relative justify-center'>
         {/* S 1 */}
    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <img src="./src/assets/images/sohaib.jpg" alt="Sohaib" className="w-48 h-48 rounded-lg shadow-lg" />
        </div>
        <h3 className="text-xl font-bold mb-2">Mr. Dr. Sohaib</h3>
        <p className="text-gray-600">Noble soul, the lightsabare of coding!</p>
      </div>
    </div>
    
    {/* S 2 */}
    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <img src="./src/assets/images/mohamed.jpg" alt="Mohamed" className="w-48 h-48 rounded-lg shadow-lg" />
        </div>
        <h3 className="text-xl font-bold mb-2">Mr. Prof. Mohamed</h3>
        <p className="text-gray-600">The hardcore battering ram of code engineering.</p>
      </div>
    </div>
      </section>


      <section className={`container mx-auto px-4 ${isDarkMode ? 'dark-mode' : 'light-mode'} p-[5%]`}>

         {/* Toggle Section */}
<div className="mt-8 text-center">
  <p className="text-gray-600 inline">
    {isDarkMode ? 'We work in the dark to serve the light!' : 'We serve the light in the darkness!'}
  </p>
  <label className="switch ml-2">
    <input type="checkbox" onChange={toggleMode} />
    <span className="slider"></span>
  </label>
</div>

      <div className="container mx-auto px-4">
        {/* Cards Row */}
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="max-w-xs bg-white rounded-lg shadow-md p-6 m-4">

          <img src={isDarkMode ? './src/assets/images/sohaib.jpg' : './src/assets/images/mohamed.jpg'}alt="Card 1" className="w-full h-auto mb-4" />

            <h3 className="text-lg font-semibold mb-2">Card 1 Title</h3>
            <p className="text-gray-600">Card 1 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white rounded-lg shadow-md p-6 m-4">
            <img src="card2-image.jpg" alt="Card 2" className="w-full h-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Card 2 Title</h3>
            <p className="text-gray-600">Card 2 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Card 3 */}
          <div className="max-w-xs bg-white rounded-lg shadow-md p-6 m-4">
            <img src="card3-image.jpg" alt="Card 3" className="w-full h-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Card 3 Title</h3>
            <p className="text-gray-600">Card 3 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        {/* Call to Action Section */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold">Call to Action Title</h2>
          <p className="text-gray-600 mt-2">Call to Action Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Call to Action Button</button>
        </div>
      </div>
    </section>

      
    </>
  )
}

export default ForCLA
