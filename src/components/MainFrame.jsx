import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePageFull from './Pages/Home/HomePageFull';
import AboutMeFull from './Pages/AboutMe/AboutMeFull';
import ContactPage from './Pages/ContactMe/ContactPage';
import ForCLA from './Pages/ForCLA/ForCLA';

import Footer from './Footer';
import FaqPage from './Pages/FAQ/FaqPage';

import MobileNav from './GlobalComponents/Navigation/MobileNav';

/* ICONS */
import { IoHomeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { PiEnvelope } from "react-icons/pi";

import AudioPlayer from '../assets/audio/AudioPlayer';


function MainFrame() {
  return (
    <Router>
      <section className='rounded-xl p-5 max-sm:m-5 md:h-[92vh] max-sm:h-[95vh] m-10 bg-[#19243eae] relative top-0 left-0 right-0 overflow-y-scroll border border-[#ffffff10]'>
        <div className='flex flex-col md:flex-row'>

          {/* Main Navigation Desktop */}
          <div className='flex-none w-48'>

            <section className='fixed max-sm:relative flex flex-col place-content-between h-[85vh] max-sm:hidden'>

              <div>
              <Link to="/"><h2>[LOGO]</h2></Link>
              </div>

              <nav className='flex flex-col'>
                <Link to="/" className="text-white hover:text-gray-300 flex flex-row items-center mb-5"><span className='mr-3 w-5 h-5 bg-[#197049] hover:bg-[#14553c] p-4 relative rounded'><IoHomeOutline className='absolute top-[25%] left-[25%]'/></span>Home</Link>
                <Link to="/about" className="text-white hover:text-gray-300 flex flex-row items-center mb-5"><span className='mr-3 w-5 h-5 bg-[#197049] hover:bg-[#14553c] p-4 relative rounded'><LuUser className='absolute top-[25%] left-[25%]'/></span>About</Link>
                <Link to="/faq" className="text-white hover:text-gray-300 flex flex-row items-center mb-5"><span className='mr-3 w-5 h-5 bg-[#197049] hover:bg-[#14553c] p-4 relative rounded'><RxQuestionMarkCircled className='absolute top-[25%] left-[25%]'/></span>F.A.Q.</Link>
                <Link to="/contact" className="text-white hover:text-gray-300 flex flex-row items-center mb-5"> <span className='mr-3 w-5 h-5 bg-[#197049] hover:bg-[#14553c] p-4 relative rounded'><PiEnvelope className='absolute top-[25%] left-[25%]'/> </span>Contact</Link>
                <Link to="/for-cla" className="text-white hover:text-gray-300 flex flex-row items-center mb-5 border border bg-[#19704918] border-[#ffffff30] hover:border-[#ffffff50] p-2 rounded-xl">
                <svg className='w-6 mr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.53 75.53" class="w-[38px] lg:w-[42px]"><path className='scale-90' d="M26.17 15.11h0l-13.08 7.55v15.1h0v15.1l13.08-7.54v-15.1-.01h0l13.08-7.54V7.57l-13.08 7.54zm26.14 0v15.1l13.08-7.54V7.57l-13.08 7.54z" fill="#8857ff" opacity="1"></path><path d="M52.32 15.12L39.24 7.56l-.01 15.1 13.08 7.55.01-15.09z" fill="#132ad1" opacity="1"></path><g fill="#36ffe2"><path d="M52.3 15.12l13.09-7.55L52.31.01 39.23 7.56l13.07 7.56z"></path><path d="M39.23 7.56L26.16 0 13.08 7.55.01 15.11l13.07 7.56 13.08-7.56h-.01l13.08-7.55z"></path></g><path d="M.01 15.11L0 60.41l26.15 15.11.01-15.1-13.06-7.55-.02-30.2L.01 15.11z" fill="#132ad1" opacity="1"></path><path d="M26.17 60.41v.01 15.1l13.08-7.54v-.01-15.1l-13.08 7.54z" fill="#8857ff" opacity="1"></path><path d="M39.24 52.87l-13.07-7.56-13.08 7.55 13.07 7.55h0l13.08-7.54h0 0z" fill="#36ffe2"></path><path d="M52.31 60.42v15.1l13.08-7.54v-15.1l-13.08 7.54z" fill="#8857ff" opacity="1"></path><path d="M52.32 60.43l-13.08-7.56-.01 15.1 13.08 7.56.01-15.1z" fill="#132ad1" opacity="1"></path><path d="M52.3 60.43l13.09-7.55-13.08-7.56-13.08 7.55 13.07 7.56z" fill="#36ffe2"></path></svg>
                  <span className='ml-3'>For CLA</span>
                  </Link>

                  

              </nav>


              <div>
                <div className='mb-6'>
                <AudioPlayer />
                </div>
                <span className='text-slate-500'>&copy; <span>{new Date().getFullYear()}</span> GPL</span>
              </div>

            </section>





          {/* Main Navigation Mobile */}


        <section className='md:hidden'>
          <MobileNav/>
        </section>


            
            
          </div>



          <main className='flex-1 overflow-y-auto overflow-x-hidden relative'>
            {/* Routes configuration */}
            <Routes>
              <Route exact path="/" element={<HomePageFull />} />
              <Route path="/about" element={<AboutMeFull />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path='/for-cla' element={<ForCLA />} />
            </Routes>

            <Footer />
          </main>
        </div>
      </section>
    </Router>
  );
}

export default MainFrame;
