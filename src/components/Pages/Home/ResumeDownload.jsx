import React from 'react';
import MyBtn from '../../GlobalComponents/Buttons/MyBtn';
import { PiDownloadLight } from "react-icons/pi";

const ResumeDownload = () => {
  return (
<div id="resume" className="w-full mt-10 mb-20 px-4 py-8">
  <section className=' bg-white rounded-lg shadow-md p-[8%] md:p-[8%]'>
    <div className="flex flex-col md:flex-row text-center md:text-left md:items-center">
      <img src="./src/assets/images/test-aurora.jpg" alt="Resume Icon" className="w-16 h-16 mr-0 md:mr-4 md:mb-0 mb-4 md:mb-0" />
      <div className='text-left'>
        <h2 className="text-2xl font-semibold">Download My Resume</h2>
        <p className="text-lg text-gray-600">Check out my experience and skills!</p>
      </div>
    </div>
    <p className="text-gray-700 mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ex vestibulum, fermentum est at, viverra ipsum. Nulla consectetur ipsum eget condimentum interdum.
    </p>
    <div className="mt-6">
      <a href="resume.pdf" download className="bg-[#197049] hover:bg-[#14553c] text-white font-bold py-2 px-4 rounded-xl inline-flex items-center">
        <PiDownloadLight className="mr-4 w-8 h-8" /> Download Resume
      </a>
    </div>
  </section>
</div>

  );
}

export default ResumeDownload;
