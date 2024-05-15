import React from 'react';

const Guarantee = () => {
  return (
    <div className="relative text-white py-20 px-10 z-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('./src/assets/images/aurora-tall.jpg')" }}></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#14553c] opacity-90"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-4">My Guarantees</h2>
        <ul className="list-disc pl-6 mt-[5%] mb-[5%]">
          <li className="text-lg mb-4">High-quality work delivered on time</li>
          <li className="text-lg mb-4">Transparent communication throughout the project</li>
          <li className="text-lg mb-4">Dedicated support and assistance</li>
          <li className="text-lg mb-4">Customized solutions tailored to your needs</li>
          <li className="text-lg mb-4">Satisfaction guaranteed or your money back</li>
        </ul>

     <div className='flex max-sm:flex-col'>
        <a href="#contact" className="bg-[#197049] hover:bg-[#14553c] text-white font-bold py-2 px-4 rounded inline-block mr-4">
          Contact Us
        </a>

        <a href="#services" className="bg-[#197049] hover:bg-[#14553c] text-white font-bold py-2 px-4 rounded inline-block mr-4 max-sm:my-5">
          View Services
        </a>

        <a href="#portfolio" className="bg-[#197049] hover:bg-[#14553c] text-white font-bold py-2 px-4 rounded inline-block mr-4">
          View Portfolio
        </a>

        </div>
      </div>
    </div>
  );
}

export default Guarantee;
