import React from 'react';
import image11 from '../assets/11.png';
import image12 from '../assets/12.png';
import image13 from '../assets/13.png';
import image21 from '../assets/21.png';
import image22 from '../assets/22.png';
import image23 from '../assets/23.png';

const Version = () => {
  const firstLineImages = [image11, image12, image13];
  const secondLineImages = [image21, image22, image23];

  return (
    <div className="relative bg-black bg-opacity-50 py-28 px-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left Section with Images */}
        <div className="col-span-1 md:col-span-3">
          {/* First Line */}
          <div className="flex flex-wrap justify-between gap-4 mb-12 md:mb-48">
            {firstLineImages.map((img, index) => (
              <div key={index} className="w-1/3 px-2 md:w-1/3">
                <img
                  src={img}
                  alt={`First Line Image ${index + 1}`}
                  className="w-full h-16 md:h-16 rounded-lg object-contain"
                />
              </div>
            ))}
          </div>
          {/* Second Line */}
          <div className="flex flex-wrap justify-between gap-4">
            {secondLineImages.map((img, index) => (
              <div key={index} className="w-1/3 px-2 md:w-1/3">
                <img
                  src={img}
                  alt={`Second Line Image ${index + 1}`}
                  className="w-full h-16 md:h-16 rounded-lg object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-white mt-8 md:mt-0">
          <h2 className="text-white text-3xl md:text-5xl font-semibold font-sans text-center font-montserrat leading-tight -mt-4 md:-mt-18">
            Trusted By{' '}
            <span className="text-[#00FBF4] font-bold">1,000+</span>
            <br />
            World's Leading
            <br />
            <span className="text-[#00FBF4] font-bold">IT Companies.</span>
          </h2>

          {/* Paragraph */}
          <p className="text-center text-white text-lg px-4 mt-10 md:mt-20">
            Famefing leverages cutting-edge technology and innovative strategies to propel individuals and businesses into the spotlight, fostering unprecedented visibility and recognition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Version;
