import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosPaperPlane } from 'react-icons/io';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#1F2937] border-b-[1px] border-[#2d3d52] shadow-xl flex items-center justify-between p-4 z-50">
        {/* Logo on the left */}
        <div className="flex items-center">
          <span className="text-white font-bold text-xl">Logo</span>
        </div>
        
        {/* Hamburger menu button on the right */}
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>

      {/* Navigation links */}
      {isOpen && (
        <div className="fixed top-[64px] left-0 right-0 bg-[#1F2937] shadow-xl z-40">
          <ul className="flex flex-col items-center justify-center py-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 flex flex-row items-center mb-5">
                <span className='mr-3 w-5 h-5 bg-[#197049] hover:bg-[#14553c] p-4 relative rounded'>
                  <IoHomeOutline className='absolute top-[25%] left-[25%]'/>
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300 flex flex-row items-center mb-5">
                <span className='mr-3 w-5 h-5 bg-[#197049] hover:bg-[#14553c] p-4 relative rounded'>
                  <FaUser className='absolute top-[25%] left-[25%]'/>
                </span>
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-white hover:text-gray-300 flex flex-row items-center mb-5">
                <span className='mr-3 w-5 h-5 bg-[#197049] hover:bg-[#14553c] p-4 relative rounded'>
                  <RiQuestionnaireLine className='absolute top-[25%] left-[25%]'/>
                </span>
                F.A.Q.
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300 flex flex-row items-center mb-5">
                <span className='mr-3 w-5 h-5 bg-[#197049] hover:bg-[#14553c] p-4 relative rounded'>
                  <AiOutlineMail className='absolute top-[25%] left-[25%]'/>
                </span>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/for-cla" className="text-white hover:text-gray-300 flex flex-row items-center mb-5 border border bg-[#19704918] border-[#ffffff30] hover:border-[#ffffff50] p-2 rounded-xl">
                <svg className='w-6 mr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.53 75.53" class="w-[38px] lg:w-[42px]">
                  <path className='scale-90' d="M26.17 15.11h0l-13.08 7.55v15.1h0v15.1l13.08-7.54v-15.1-.01h0l13.08-7.54V7.57l-13.08 7.54zm26.14 0v15.1l13.08-7.54V7.57l-13.08 7.54z" fill="#8857ff" opacity="1"></path>
                  <path d="M52.32 15.12L39.24 7.56l-.01 15.1 13.08 7.55.01-15.09z" fill="#132ad1" opacity="1"></path>
                  <g fill="#36ffe2">
                    <path d="M52.3 15.12l13.09-7.55L52.31.01 39.23 7.56l13.07 7.56z"></path>
                    <path d="M39.23 7.56L26.16 0 13.08 7.55.01 15.11l13.07 7.56 13.08-7.56h-.01l13.08-7.55z"></path>
                  </g>
                  <path d="M.01 15.11L0 60.41l26.15 15.11.01-15.1-13.06-7.55-.02-30.2L.01 15.11z" fill="#132ad1" opacity="1"></path>
                  <path d="M26.17 60.41v.01 15.1l13.08-7.54v-.01-15.1l-13.08 7.54z" fill="#8857ff" opacity="1"></path>
                  <path d="M39.24 52.87l-13.07-7.56-13.08 7.55 13.07 7.55h0l13.08-7.54h0 0z" fill="#36ffe2"></path>
                  <path d="M52.31 60.42v15.1l13.08-7.54v-15.1l-13.08 7.54z" fill="#8857ff" opacity="1"></path>
                  <path d="M52.32 60.43l-13.08-7.56-.01 15.1 13.08 7.56.01-15.1z" fill="#132ad1" opacity="1"></path>
                  <path d="M52.3 60.43l13.09-7.55-13.08-7.56-13.08 7.55 13.07 7.56z" fill="#36ffe2"></path>
                </svg>
                <span className='ml-3'>For CLA</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
