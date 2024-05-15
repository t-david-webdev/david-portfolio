
import React from 'react';
import MyBtn from '../../GlobalComponents/Buttons/MyBtn';

const FAQ = () => {


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-white font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* FAQ Item 1 */}
        <div className="bg-white rounded-lg shadow-md p-6" itemScope itemtype="https://schema.org/FAQPage">
          <h3 className="text-lg font-semibold mb-2" itemScope="mainEntity">Question 1</h3>
          <p className="text-gray-600 mb-4" itemScope="acceptedAnswer" itemtype="https://schema.org/Answer">
            <span itemScope="text">Answer 1</span>
          </p>
        </div>
        {/* FAQ Item 2 */}
        <div className="bg-white rounded-lg shadow-md p-6" itemScope itemtype="https://schema.org/FAQPage">
          <h3 className="text-lg font-semibold mb-2" itemScope="mainEntity">Question 2</h3>
          <p className="text-gray-600 mb-4" itemScope="acceptedAnswer"  itemtype="https://schema.org/Answer">
            <span itemScope="text">Answer 2</span>
          </p>
        </div>
        {/* Add more FAQ items */}
        {/* FAQ Item 3 */}
        <div className="bg-white rounded-lg shadow-md p-6" itemScope itemtype="https://schema.org/FAQPage">
          <h3 className="text-lg font-semibold mb-2" itemScope="mainEntity">Question 3</h3>
          <p className="text-gray-600 mb-4" itemScope="acceptedAnswer"  itemtype="https://schema.org/Answer">
            <span itemScope="text">Answer 3</span>
          </p>
        </div>
        {/* FAQ Item 4 */}
        <div className="bg-white rounded-lg shadow-md p-6" itemScope itemtype="https://schema.org/FAQPage">
          <h3 className="text-lg font-semibold mb-2" itemScope="mainEntity">Question 4</h3>
          <p className="text-gray-600 mb-4" itemScope="acceptedAnswer"  itemtype="https://schema.org/Answer">
            <span itemScope="text">Answer 4</span>
          </p>
        </div>
        {/* FAQ Item 5 */}
        <div className="bg-white rounded-lg shadow-md p-6" itemScope itemtype="https://schema.org/FAQPage">
          <h3 className="text-lg font-semibold mb-2" itemScope="mainEntity">Question 5</h3>
          <p className="text-gray-600 mb-4" itemScope="acceptedAnswer"  itemtype="https://schema.org/Answer">
            <span itemScope="text">Answer 5</span>
          </p>
        </div>
        {/* FAQ Item 6 */}
        <div className="bg-white rounded-lg shadow-md p-6" itemScope itemtype="https://schema.org/FAQPage">
          <h3 className="text-lg font-semibold mb-2" itemScope="mainEntity">Question 6</h3>
          <p className="text-gray-600 mb-4" itemScope="acceptedAnswer" itemtype="https://schema.org/Answer">
            <span itemScope="text">Answer 6</span>
          </p>
        </div>
      </div>
      <div className='mt-[5%] relative'>
      <MyBtn btnText="All questions" href="/about"/>
      </div>
    </div>
  );
}

export default FAQ;
