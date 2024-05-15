import React from 'react';

const HeroSection = ({ title, subtitle, backgroundImage, overlayColor }) => {
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center h-[50vh] p-20 md:p-10 max-sm:p-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: overlayColor,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className=" container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg text-white">{subtitle}</p>
      </div>
    </section>
  );
}

export default HeroSection;
