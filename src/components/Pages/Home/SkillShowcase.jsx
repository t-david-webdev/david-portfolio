import React from 'react';
import MyBtn from '../../GlobalComponents/Buttons/MyBtn';

const SkillShowcase = () => {
  return (
    <div className='flex flex-col text-center'>
      <h2 className="text-white font-semibold mb-4">My Skills</h2>
      <p className=" font-semibold mb-8 max-sm:mb-0">So far...</p>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Front-end Development */}
        <div className="flex flex-col md:flex-row mb-8 bg-[#ffffff10] border border-[#ffffff30] rounded-xl backdrop-blur-md p-[5%]">
          <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <img src="./src/assets/images/test-aurora.jpg" alt="Front-end Development" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-4 text-left flex flex-col justify-center">
            <h3 className="text-white mb-2">Front-end Development</h3>
            <p className="text-lg italic text-[#3bcb69] mb-8">Building interactive and user-friendly interfaces.</p>
            <p className="text-lg mb-4">I specialize in crafting beautiful and functional front-end experiences using modern web technologies like HTML, CSS, and JavaScript frameworks such as React.</p>
            <MyBtn btnText="React now!" href="/about"/>

          </div>
        </div>
        {/* WordPress Development */}
        <div className="flex flex-col md:flex-row mb-8 bg-[#ffffff10] border border-[#ffffff30] rounded-xl backdrop-blur-md p-[5%]">
          <div className="md:w-1/2 md:pl-4 md:order-2 mb-4 md:mb-0">
            <img src="./src/assets/images/test-aurora.jpg" alt="WordPress Development" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pr-4 text-left flex flex-col justify-center">
            <h3 className="text-white mb-2">WordPress Development</h3>
            <p className="text-lg italic text-[#3bcb69] mb-8">Creating customized and scalable WordPress solutions.</p>
            <p className="text-lg mb-4">I have extensive experience in developing and customizing WordPress websites, from simple blogs to complex e-commerce platforms, ensuring they meet client requirements and industry standards.</p>
            <MyBtn btnText="React now!" href="/about"/>
          </div>
        </div>
        {/* Project Management */}
        <div className="flex flex-col md:flex-row mb-8 bg-[#ffffff10] border border-[#ffffff30] rounded-xl backdrop-blur-md p-[5%]">
          <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <img src="./src/assets/images/test-aurora.jpg" alt="Project Management" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-4 text-left flex flex-col justify-center">

            <h3 className="text-white mb-2">Project Management</h3>
            <p className="text-lg italic text-[#3bcb69] mb-8">Leading projects from conception to successful completion.</p>
            <p className="text-lg mb-4">I excel in project management, overseeing all aspects of project planning, execution, and delivery. My strong organizational skills and attention to detail ensure projects are completed on time and within budget.</p>
            <MyBtn btnText="React now!" href="/about"/>
          </div>
        </div>
        {/* Website Operation */}
        <div className="flex flex-col md:flex-row mb-8 bg-[#ffffff10] border border-[#ffffff30] rounded-xl backdrop-blur-md p-[5%]">
          <div className="md:w-1/2 md:pl-4 md:order-2 mb-4 md:mb-0">
            <img src="./src/assets/images/test-aurora.jpg" alt="Website Operation" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pr-4 md:order-1 text-left justify-center flex flex-col">
            <h3 className="text-white mb-2">Website Operation</h3>
            <p className="text-lg italic text-[#3bcb69] mb-8">Ensuring smooth operation and functionality of websites.</p>
            <p className="text-lg mb-4">I am proficient in managing and maintaining website operations, including monitoring performance, resolving technical issues, and implementing updates to ensure optimal functionality and user experience.</p>
            <MyBtn btnText="React now!" href="/about"/>
          </div>
        </div>
        {/* On-page SEO */}
        <div className="flex flex-col md:flex-row mb-8 bg-[#ffffff10] border border-[#ffffff30] rounded-xl backdrop-blur-md p-[5%]">
          <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <img src="./src/assets/images/test-aurora.jpg" alt="On-page SEO" className="w-full rounded-lg shadow-md" />
          </div>
                    <div className="md:w-1/2 md:pl-4 text-left flex flex-col justify-center">

            <h3 className="text-white mb-2">On-page SEO</h3>
            <p className="text-lg italic text-[#3bcb69] mb-8">Optimizing website content for search engines.</p>
            <p className="text-lg mb-4">I have expertise in on-page SEO techniques, including keyword optimization, meta tags, and content structure, to improve website visibility and rankings on search engine results pages.</p>
            <MyBtn btnText="React now!" href="/about"/>
          </div>
        </div>
        {/* Website Optimization */}
        <div className="flex flex-col md:flex-row mb-8 bg-[#ffffff10] border border-[#ffffff30] rounded-xl backdrop-blur-md p-[5%]">
          <div className="md:w-1/2 md:pl-4 md:order-2 mb-4 md:mb-0">
            <img src="./src/assets/images/test-aurora.jpg" alt="Website Optimization" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-4 text-left flex flex-col justify-center">
            <h3 className="text-white mb-2">Website Optimization</h3>
            <p className="text-lg italic text-[#3bcb69] mb-8">Improving website performance and speed.</p>
            <p className="text-lg mb-4">I am skilled in optimizing website performance by implementing best practices such as image optimization, minification, and caching to ensure fast loading times and enhanced user experience.</p>
            <MyBtn btnText="React now!" href="/about"/>
          </div>
        </div>
        {/* Website Migration */}
        <div className="flex flex-col md:flex-row mb-8 bg-[#ffffff10] border border-[#ffffff30] rounded-xl backdrop-blur-md p-[5%]">
          <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <img src="./src/assets/images/test-aurora.jpg" alt="Website Migration" className="w-full rounded-lg shadow-md" />
          </div>
                    <div className="md:w-1/2 md:pl-4 text-left flex flex-col justify-center">

            <h3 className="text-white mb-2">Website Migration</h3>
            <p className="text-lg italic text-[#3bcb69] mb-8">Seamlessly transferring websites to new platforms or servers.</p>
            <p className="text-lg mb-4">I have experience in managing website migrations, ensuring a smooth transition of data, content, and functionality to new platforms or servers while minimizing downtime and preserving SEO rankings.</p>
            <MyBtn btnText="React now!" href="/about"/>
          </div>
        </div>
        {/* Web Marketing */}
        <div className="flex flex-col md:flex-row mb-8 bg-[#ffffff10] border border-[#ffffff30] rounded-xl backdrop-blur-md p-[5%]">
          <div className="md:w-1/2 md:pl-4 md:order-2 mb-4 md:mb-0">
            <img src="./src/assets/images/test-aurora.jpg" alt="Web Marketing" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pr-4 text-left flex flex-col justify-center">
            <h3 className="text-white mb-2">Web Marketing</h3>
            <p className="text-lg italic text-[#3bcb69] mb-8">Promoting websites through digital marketing strategies.</p>
            <p className="text-lg mb-4">I am adept in utilizing various digital marketing techniques such as SEO, SEM, email marketing, and social media marketing to drive traffic, generate leads, and increase conversions for websites.</p>
            <MyBtn btnText="React now!" href="/about"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillShowcase;
