import React from 'react'

// Importing the good stuff
import HeroSection from '../../GlobalComponents/Hero/HeroComp'

// Import the MiniDatabase
import { aboutPageHeroData } from '../../GlobalComponents/MiniDBs/miniDB'

// The BTN
import MyBtn from '../../GlobalComponents/Buttons/MyBtn'

// Sexy icons
import { GiLaurelCrown } from "react-icons/gi";
import { LiaUsersCogSolid } from "react-icons/lia";
import { PiNetworkThin } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaCircleNotch } from "react-icons/fa6";

function AboutMeFull() {
  return (
    <>
     <HeroSection
      title={aboutPageHeroData.title}
      subtitle={aboutPageHeroData.subtitle}
      backgroundImage={aboutPageHeroData.backgroundImage}
      overlayColor={aboutPageHeroData.overlayColor}
    />


<section className="container relative mx-auto py-12 mt-[-8%]">
  <div className="flex flex-wrap -mx-4">
    {/* S 1 */}
    <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <GiLaurelCrown className="w-14 h-14" />
        </div>
        <h3 className="text-xl font-bold mb-2">Loyality</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    
    {/* S 2 */}
    <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="flex items-center justify-center mb-4">
        <LiaUsersCogSolid className="w-14 h-14" />        
        </div>
        <h3 className="text-xl font-bold mb-2">Cooperation</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    
    {/* S 3 */}
    <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="flex items-center justify-center mb-4">
        <PiNetworkThin className="w-14 h-14" />
        </div>
        <h3 className="text-xl font-bold mb-2">Coherent work</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    
    {/* S 4 */}
    <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="flex items-center justify-center mb-4">
        <GiTakeMyMoney className="w-14 h-14" />
        </div>
        <h3 className="text-xl font-bold mb-2">Belief</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    
    {/* S 5 */}
    <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="flex items-center justify-center mb-4">
        <FaCircleNotch className="w-14 h-14" />
        </div>
        <h3 className="text-xl font-bold mb-2">The 7,3%</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</section>


<section className="container mx-auto py-8 md:py-12 flex flex-col-reverse md:flex-row items-center">
  
  <div className="w-full md:w-1/2 md:mr-8 m-4 md:m-[5%]">
    <img src="./src/assets/images/aurora-tall.jpg" alt="Image" className="w-full h-auto rounded-lg shadow-lg max-sm:mt-5" />
  </div>
  
  <div className="w-full md:w-1/2">
    <div className="text-left md:text-left md:mr-[5%]">
      <h2 className="text-white mb-4">Who am I? And who are you?</h2>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, consequuntur atque. Quia, autem? Expedita distinctio officiis enim velit. Consequatur dolorem aperiam natus consectetur dicta laudantium ex magnam modi ducimus quidem alias incidunt saepe, vitae harum iure reiciendis quibusdam est atque optio. 
      <br/><br/>
      Ab laudantium nulla dolores adipisci, commodi dolore perferendis ex ipsum inventore amet quae libero praesentium voluptate vitae dicta tempora tenetur magnam corporis vel, deserunt nam provident sed consectetur nisi. Adipisci unde dignissimos eos perspiciatis. Quisquam incidunt voluptate quae ut magnam quo molestiae sequi, reprehenderit fugit, ipsam tempore qui consequuntur, fuga saepe quidem esse minus ipsa unde eius nesciunt vero molestias impedit. 
      <br/><br/>
      Nobis quos mollitia repellat reprehenderit modi ab, consequatur fugiat sit dolor labore tempore ipsa ex eveniet incidunt beatae. Culpa ex totam quas mollitia facilis illo, repellendus aperiam ratione impedit, minima autem deleniti nulla numquam unde. Assumenda odio ipsum quia temporibus facilis quisquam. Aliquam, autem animi! Deleniti perferendis blanditiis corrupti, eligendi incidunt officiis minima, voluptatem error rem esse excepturi autem! Dignissimos qui eligendi officia quis repellendus dolor odio ad sunt obcaecati est nisi, a tempora itaque, voluptatibus eum eos facere cumque magni soluta tenetur, quos alias omnis quidem. Ea recusandae aliquid deleniti, deserunt a pariatur consectetur consequuntur ratione expedita?</p>
      <div className="flex justify-center md:justify-start mt-4 md:mt-[5%]">
        <MyBtn btnText="React now!" href="/about" />
      </div>
    </div>
  </div>
</section>




<section className="relative h-screen-70vh p-[8%]">
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('./src/assets/images/aurora-tall.jpg')" }}>
    <div className="absolute inset-0 bg-[#14553c] opacity-90"></div>
  </div>
  <div className="container mx-auto relative z-10">
    <h2 className="text-4xl text-white font-bold mb-4">Call to Action Title</h2>
    <p className="text-white text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <ul className="text-white mb-6">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <div className="flex flex-col md:flex-row items-start">
      <button className="bg-[#197049] hover:bg-[#14553c] text-white font-bold py-3 px-6 rounded mb-4 md:mb-0 md:mr-4">CTA Button 1</button>
      <button className="bg-[#197049] hover:bg-[#14553c] text-white font-bold py-3 px-6 rounded">CTA Button 2</button>
    </div>
  </div>
</section>








    </>
  )
}

export default AboutMeFull
