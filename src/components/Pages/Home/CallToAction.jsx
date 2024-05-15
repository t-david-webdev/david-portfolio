import React from 'react';
import MyBtn from '../../GlobalComponents/Buttons/MyBtn';

const CallToAction = () => {
  return (
    <div className="relative bg-gray-800 text-white mt-10 mb-10 py-20 px-10 md:flex items-center justify-center " style={{ height: '55vh' }}>
      {/* Overlay for desktop */}
      <div className="hidden md:block absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(./src/assets/images/aurora-tall.jpg)`, opacity: '0.1' }}></div>
      
      <div className="max-w-4xl mx-auto px-[5%] md:w-1/2 md:mr-8 z-10">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8 z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <MyBtn btnText="React now!" href="/about"/>
      </div>
    </div>
  );
}

export default CallToAction;
