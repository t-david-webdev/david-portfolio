import React from 'react';
import MyBtn from '../../GlobalComponents/Buttons/MyBtn';
import { PiDownloadLight } from "react-icons/pi";

const ExperienceShowcase = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-white mb-20 max-sm:mb-5">My Experience</h2>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/3 pr-4">
          <img src="./src/assets/images/aurora-tall.jpg" alt="Experience" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-2/3 pl-4 max-sm:pl-0">
          <h3 className="text-white mb-2 max-sm:mt-5 max-sm:mb-5">IT and Business Industry</h3>
          <p className="text-lg italic text-[#3bcb69] mb-8">
            With over 4 years of experience in the IT and business industry, I have gained valuable expertise in various domains including technology, project management, and business development.
          </p>
          <p className="text-lg mb-4">
            Throughout my career, I have successfully led cross-functional teams, managed complex projects from conception to execution, and implemented innovative solutions to drive business growth and success.
          </p>
          <p className="text-lg mb-4">
            My passion for learning and adapting to new technologies, combined with my strong analytical and problem-solving skills, allows me to effectively address challenges and deliver impactful results in dynamic and fast-paced environments.
          </p>
          <ul className="list-none mb-4">
  <li className="mb-2 relative pl-8 pt-5">
    <span className="absolute left-0 top-[20px] w-6 h-6 flex items-center justify-center rounded-full bg-[#197049] text-white">1</span> 
    Worked with people from Canada, USA, Switzerland, France, Slovakia, Hungary, Romania.
  </li>
  <li className="mb-2 relative pl-8 pt-5">
    <span className="absolute left-0 top-[20px] w-6 h-6 flex items-center justify-center rounded-full bg-[#197049] text-white">2</span>
    Completed more than 70+ projects.
  </li>
  <li className="mb-2 relative pl-8 pt-5">
    <span className="absolute left-0 top-[20px] w-6 h-6 flex items-center justify-center rounded-full bg-[#197049] text-white">3</span>
    Obtained multiple certificates:
    <ul className="pl-0 ml-5 list-disc mt-10 max-sm:ml-0">
  <li>
    <h4>Certificate 1</h4>
    <p>Description of Certificate 1</p>
    <a href="certificate1.pdf" download className="text-[#3bcb69] flex items-center mb-10">
      <PiDownloadLight className="mr-1" />
      Download Certificate
    </a>
  </li>
  <li>
    <h4>Certificate 2</h4>
    <p>Description of Certificate 2</p>
    <a href="certificate2.pdf" download className="text-[#3bcb69] flex items-center">
      <PiDownloadLight className="mr-1" />
      Download Certificate
    </a>
  </li>
</ul>

  </li>
  <li className="mb-2 relative pl-8 pt-5">
    <span className="absolute left-0 top-[20px] w-6 h-6 flex items-center justify-center rounded-full bg-[#197049] text-white">4</span>
    Worked on various types of projects, including:
    <ul className="pl-0 ml-5 list-disc max-sm:m-0 max-sm:mt-5">
      <li>Presentational websites</li>
      <li>Webshops</li>
      <li>Blog systems</li>
      <li>Single-page applications</li>
    </ul>
  </li>
</ul>


        </div>
      </div>
    </div>
  );
}

export default ExperienceShowcase;
