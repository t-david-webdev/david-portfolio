import React from 'react';
import HeroSection from '../../GlobalComponents/Hero/HeroComp';
import { webDevelopmentFAQ } from '../../GlobalComponents/MiniDBs/miniDB';
import { FaqHeroData } from '../../GlobalComponents/MiniDBs/miniDB';

function FaqPage() {
  return (
    <>
      <HeroSection
          title={FaqHeroData.title}
          subtitle={FaqHeroData.subtitle}
          backgroundImage={FaqHeroData.backgroundImage}
          overlayColor={FaqHeroData.overlayColor}
      />

<section className="container mt-[-8%] mb-[5%] relative px-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {webDevelopmentFAQ.map((item, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-2">{item.question}</h2>
        <p className="text-gray-600">{item.answer}</p>
      </div>
    ))}
  </div>
</section>

    </>
  );
}

export default FaqPage;
