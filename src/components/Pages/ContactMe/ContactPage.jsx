import React from 'react';
import HeroSection from '../../GlobalComponents/Hero/HeroComp';
import { contactPageHeroData } from '../../GlobalComponents/MiniDBs/miniDB';
import FAQ from '../Home/FAQ';
import Testimonials from '../Home/Testimonials';
import MyBtn from '../../GlobalComponents/Buttons/MyBtn';

// sexy icons
import { ImFacebook2 } from "react-icons/im";
import { FaFacebookMessenger } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiMastodon } from "react-icons/si";
import { FaSquareEnvelope } from "react-icons/fa6";
import { MdHighQuality } from "react-icons/md";
import { LiaHandshake } from "react-icons/lia";
import { PiUserCirclePlusLight } from "react-icons/pi";

const ContactPage = () => {
  return (
    <>
      <HeroSection
        title={contactPageHeroData.title}
        subtitle={contactPageHeroData.subtitle}
        backgroundImage={contactPageHeroData.backgroundImage}
        overlayColor={contactPageHeroData.overlayColor}
      />


{/* Contact Information */}
<section className="h-screen md:h-auto flex flex-col md:flex-row items-center p-[5%] relative mt-[-8%] mb-[8%]">

  <div className="flex-none w-full md:w-1/2 mb-8 md:mb-0 rounded-md shadow-md max-sm:mt-[-20%]">
    <img src="./src/assets/images/aurora-tall.jpg" alt="webdeveloper" className='rounded-md border border-[#28a36c]'/>
  </div>

  <div className="flex-1 max-sm:text-left">
    <div className="p-4 md:p-10">
      <h2 className="font-bold mb-4 text-white">I`m social!</h2>
      <p className="mb-2">Get in touch with me</p>
      <p className="mb-4 text-left">Have a question or inquiry? Feel free to reach out to us!</p>

      <ul className="mb-4">
        <li className="flex items-center mb-2 mt-6">
          <a href="#" target="_blank" className='text-white hover:text-gray-300 flex flex-row items-center'>
            <div className='bg-[#197049] p-2 rounded mr-3'><FaSquareEnvelope className='w-5 h-5'/></div> Email: example@example.com
          </a>
        </li>
        <li className="flex items-center mb-2 mt-6">
          <a href="#" target="_blank" className='text-white hover:text-gray-300 flex flex-row items-center'>
            <div className='bg-[#197049] p-2 rounded mr-3'><ImFacebook2 className='w-5 h-5'/> </div>FaceBook: example@example.com
          </a>
        </li>
        <li className="flex items-center mb-2 mt-6">
          <a href="#" target="_blank" className='text-white hover:text-gray-300 flex flex-row items-center'>
            <div className='bg-[#197049] p-2 rounded mr-3'><FaFacebookMessenger className='w-5 h-5'/> </div>FaceBookMessenger: example@example.com
          </a>
        </li>
        <li className="flex items-center mb-2 mt-6">
          <a href="#" target="_blank" className='text-white hover:text-gray-300 flex flex-row items-center'>
            <div className='bg-[#197049] p-2 rounded mr-3'><BsTwitterX className='w-5 h-5'    /></div>X (former Twitter): example@example.com
          </a>
        </li>
        <li className="flex items-center mb-2 mt-6">
          <a href="#" target="_blank" className='text-white hover:text-gray-300 flex flex-row items-center'>
            <div className='bg-[#197049] p-2 rounded mr-3'> <BsLinkedin className='w-5 h-5'/> </div>LinkedIN: example@example.com
          </a>
        </li>
        <li className="flex items-center mb-2 mt-6">
          <a href="#" target="_blank" className='text-white hover:text-gray-300 flex flex-row items-center'>
            <div className='bg-[#197049] p-2 rounded mr-3'><SiMastodon className='w-5 h-5'/></div>Mastodon: example@example.com
          </a>
        </li>
      </ul>

      <div className='mt-[5%] flex mt-16'>
        <MyBtn btnText="React now!" href="/about" />
      </div>
    </div>
  </div>
</section>





      {/* Message or Call to Action */}
<section className="p-[8%] flex flex-col justify-center items-center relative max-sm:mt-[50%]" style={{ backgroundImage: `url(./src/assets/images/test-aurora.jpg)`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
  <div className="absolute inset-0 bg-[#2d2d2d] opacity-[70%]"></div>
  <div className="text-center text-white relative z-10">
    <h2 className="text-3xl font-bold mb-4">Message or Call to Action</h2>
    <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

   {/* Promises */}
<div className="flex justify-center space-x-4 mb-8 max-sm:flex-col">
  {/* Promise 1 */}
  <div className="text-center bg-[#ffffff10] border rounded-md border-[#ffffff30] p-[3%] backdrop-blur-md m-2">
    <MdHighQuality className="w-16 h-16 mx-auto mb-2"/>
    <h3 className="text-lg font-bold mb-2">Quality</h3>
    <p className="text-sm">We promise top-notch quality in every aspect of our service, ensuring your satisfaction.</p>
  </div>
  {/* Promise 2 */}
  <div className="text-center bg-[#ffffff10] border rounded-md border-[#ffffff30] p-[3%] backdrop-blur-md m-2">
    <LiaHandshake className="w-16 h-16 mx-auto mb-2"/>
    <h3 className="text-lg font-bold mb-2">Reliability</h3>
    <p className="text-sm">Count on us to deliver our promises consistently and reliably, every single time.</p>
  </div>
  {/* Promise 3 */}
  <div className="text-center bg-[#ffffff10] border rounded-md border-[#ffffff30] p-[3%] backdrop-blur-md m-2">
    <PiUserCirclePlusLight className="w-16 h-16 mx-auto mb-2"/>
    <h3 className="text-lg font-bold mb-2">Customer Satisfaction</h3>
    <p className="text-sm">Our primary goal is your satisfaction, and we go above and beyond to achieve it.</p>
  </div>
</div>


<div className='mt-[5%]'>
    <MyBtn btnText="React now!" href="/about" />
    </div>
  </div>  
</section>



      {/* FAQs */}
      <section className="bg-[#1F2937] py-12">
       <FAQ />
      </section>

      {/* Testimonials */}
      <section className="py-12">

        <Testimonials />
       
      </section>
    </>
  );
}

export default ContactPage;
