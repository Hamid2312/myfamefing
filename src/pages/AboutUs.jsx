import React from 'react';
import imagePath from '../assets/two-female-it-engineers-in-server-room-TMEWJB6c.jpg';
import Introduction from '../components/Introduction';

const AboutUs = () => {
  return (
    <div>
      <div
        className="h-[46vh] bg-cover bg-center flex flex-col justify-center items-center overflow-hidden relative bg-black bg-opacity-50"
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundPosition: 'center', // Keeps the image centered
        }}
      >
        {/* Upper Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[40px] md:text-[80px] lg:text-[115px] text-white absolute top-[20%] sm:top-[18%]">
          <span className="text-[#00FBF4]">About</span> Us
        </h1>

        {/* Lower Heading */}
        <h2 className="text-white text-lg mt-10 sm:mt-20 lg:mt-40 text-center">
          Home - <span className='text-[#00FBF4]'>About Us</span>
        </h2>
      </div>
      <Introduction />
    </div>
  );
};

export default AboutUs;
