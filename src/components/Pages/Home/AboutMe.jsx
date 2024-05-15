// AboutMe.js
import React from 'react';
import MyBtn from '../../GlobalComponents/Buttons/MyBtn';

const AboutMe = () => {
  return (
    <div className="max-w-4xl mt-[8%] mb-[8%] mx-auto px-4 py-8">
      <h2 className="text-white font-semibold mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
          <img src="https://www.moonshot.hu/wp-content/uploads/2021/08/120099233_674657189823432_101340122685957019_n.png" alt="Profile" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit tortor in nulla euismod, vitae tempus felis tempus. Vestibulum quis pharetra justo. Nulla non augue sit amet nibh convallis dictum at quis libero. Ut suscipit justo eget odio vestibulum, ac viverra mi scelerisque. Donec ullamcorper tortor ac ex convallis, et efficitur quam ultrices. 
          </p>
          <p className=" mb-4">
            Mauris non nisl non est commodo vehicula. Aliquam vestibulum arcu ac elit vehicula, vitae volutpat metus hendrerit. Aenean at turpis sed elit mollis ullamcorper. Vivamus et libero sit amet libero rutrum efficitur. Integer vehicula enim vel arcu tincidunt venenatis.
          </p>
         
          <div className="flex justify-center md:justify-start mt-10 sm:justify-start">
          <MyBtn btnText="React now!" href="/about" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-white font-semibold mb-4">At your disposal!</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="https://www.moonshot.hu/wp-content/uploads/2021/08/120099233_674657189823432_101340122685957019_n.png" alt="Gallery Image 1" className="rounded-lg shadow-md" />
          <img src="https://www.moonshot.hu/wp-content/uploads/2021/08/120099233_674657189823432_101340122685957019_n.png" alt="Gallery Image 2" className="rounded-lg shadow-md" />
          <img src="https://www.moonshot.hu/wp-content/uploads/2021/08/120099233_674657189823432_101340122685957019_n.png" alt="Gallery Image 3" className="rounded-lg shadow-md" />
          {/* Add more gallery images as needed */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
