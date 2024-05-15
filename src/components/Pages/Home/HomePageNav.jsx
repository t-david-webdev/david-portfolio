import React, { useEffect } from 'react';
import { Link } from 'react-scroll';


function HomePageNav() {
  return (
    <>

  <nav className="bg-[#1f2937b5] backdrop-blur p-4 fixed min-w-min z-10 rounded-lg left-[22%] max-sm:hidden">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">

           {/* HELP NEENED

          <li>
          <Link 
      to="skill-cards" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    >
      Test
    </Link>
          </li>

                */}
        
          <li>
            <a href="#skill-cards" className="text-white hover:text-gray-300">Technologies</a>
          </li>
          <li>
            <a href="#about-me" className="text-white hover:text-gray-300">About Me</a>
          </li>
          <li>
            <a href="#skill-showcase" className="text-white hover:text-gray-300">My Skills</a>
          </li>
          <li>
            <a href="#experience-showcase" className="text-white hover:text-gray-300">Experience</a>
          </li>
          <li>
            <a href="#testimonials" className="text-white hover:text-gray-300">Testimonials</a>
          </li>
          <li>
            <a href="#faq" className="text-white hover:text-gray-300">FAQ</a>
          </li>
          <li>
            <a href="#resume-download" className="text-white hover:text-gray-300">Resume Download</a>
          </li>a
        </ul>
      </div>
    </nav>




    </>
  )
}

export default HomePageNav
