import React from 'react';
import MyBtn from '../../GlobalComponents/Buttons/MyBtn';

/* Sexy icons */
import { BiLogoReact } from "react-icons/bi";
import { SiHtmlacademy } from "react-icons/si";
import { TfiWordpress } from "react-icons/tfi";
import { LiaElementor } from "react-icons/lia"; 
import { FaHtml5, FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiZapier } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiLinux } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const SkillCards = () => {
  return (
    <div id="skill-cards">

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-3%] mb-[3%] mx-[5%]">
   {/* React Skill Card */}
   <div className="bg-white items-center rounded-lg shadow-md p-6 mb-4 flex flex-col content-center">
        <BiLogoReact className='w-16 h-16 mb-5'/>
        <h3 className="text-xl font-semibold text-center mb-2">React</h3>
        <p className="text-sm text-gray-600 text-center">A JavaScript library for building user interfaces.</p>
        
      </div>

      {/* HTML/CSS/JS Skill Card */}
      <div className="bg-white items-center rounded-lg shadow-md p-6 mb-4 flex flex-col content-center">
      <SiHtmlacademy className='w-16 h-16 mb-5'/>
        <h3 className="text-xl font-semibold text-center mb-2">HTML/CSS/JS</h3>
        <p className="text-sm text-gray-600 text-center">The building blocks of web development.</p>
      </div>

      {/* WordPress Skill Card */}
      <div className="bg-white items-center rounded-lg shadow-md p-6 mb-4 flex flex-col content-center">
        <TfiWordpress className='w-16 h-16 mb-5'/>
        <h3 className="text-xl font-semibold text-center mb-2">WordPress</h3>
        <p className="text-sm text-gray-600 text-center">A popular content management system (CMS) for website creation.</p>
      </div>


      {/* Elementor Skill Card */}
      <div className="bg-white items-center rounded-lg shadow-md p-6 mb-4 flex flex-col content-center">
       <LiaElementor className='w-16 h-16 mb-5'/>
        <h3 className="text-xl font-semibold text-center mb-2">Elementor</h3>
        <p className="text-sm text-gray-600 text-center">A drag-and-drop page builder plugin for WordPress.</p>
      </div>
    </section>

    <section className="p-[8%] flex flex-col text-center bg-[#ffffff10] border border-[#ffffff30] backdrop-blur-md rounded-lg mt-2 p-[5%]">
  <h2 className="text-white mb-5">Technologies</h2>
  <p>Technologies that I am familiar with:</p>

  <ul className="mb-10 mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center">
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <FaHtml5 className="w-10 h-10 text-[#1F2937]" />
      HTML
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <FaCss3Alt className="w-10 h-10 text-[#1F2937]" />
      CSS
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <FaJsSquare className="w-10 h-10 text-[#1F2937]" />
      JS
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <RiTailwindCssFill className="w-10 h-10 text-[#1F2937]" />
      TailwindCSS
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <FaPhp className="w-10 h-10 text-[#1F2937]" />
      PHP
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <BiLogoReact className="w-10 h-10 text-[#1F2937]" />
      React
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <SiRedux className="w-10 h-10 text-[#1F2937]" />
      ReactRedux
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <SiBootstrap className="w-10 h-10 text-[#1F2937]" />
      BootStrap
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <SiJquery className="w-10 h-10 text-[#1F2937]" />
      jQuery
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <TfiWordpress className="w-10 h-10 text-[#1F2937]" />
      WordPress
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <LiaElementor className="w-10 h-10 text-[#1F2937]" />
      Elementor
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <GrMysql className="w-10 h-10 text-[#1F2937]" />
      SQL
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <FaGitSquare className="w-10 h-10 text-[#1F2937]" />
      Git
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <FaGithubSquare className="w-10 h-10 text-[#1F2937]" />
      GitHub
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <SiZapier className="w-10 h-10 text-[#1F2937]" />
      Zappier
    </li>
    <li className="flex flex-col items-center bg-white text-black p-2 rounded-lg">
      <SiLinux className="w-10 h-10 text-[#1F2937]" />
      GNU/Linux OS
    </li>
  </ul>

  <MyBtn btnText="React now!" href="/about" />
</section>

   
    </div>

  );
}

export default SkillCards;
