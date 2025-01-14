import React from "react";
import imagePath from "../assets/services.jpg";
import cardImage1 from "../assets/cardImage1.jpg";
import cardImage2 from "../assets/cardImage2.jpg";
import cardImage3 from "../assets/cardImage3.jpg";
import Mission from "../components/Mission";
import Solution from "../components/Solution";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[46vh] bg-cover bg-center flex flex-col justify-center items-center overflow-hidden relative"
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundPosition: "center", // Keeps the image centered
        }}
      >
        {/* Transparent Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-8 md:px-16">
          <h1 className="text-[#00FBF4] text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[112px] font-semibold">
            Service<span className="text-white">s</span>
          </h1>
          <h1 className="text-white text-[14px] sm:text-[16px] md:text-[17px]">
            Home - <span className="text-[#00FBF4] hover:text-white">Services</span>
          </h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 px-6 md:px-16 bg-[rgba(0, 0, 0, 0.9)]">
        <h2 className="text-[#00FBF4] text-4xl font-bold text-center mb-8">
          Our Premium Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[rgba(0, 0, 0, 0)] shadow-lg rounded-lg border border-white overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <img
              src={cardImage1}
              alt="Service 1"
              className="w-full h-52 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#00FBF4] mb-4">
                Web Development
              </h3>
              <p className="text-white mb-6">
                Build modern and responsive websites tailored to your needs.
              </p>
              <button className="bg-[#00FBF4] text-white px-5 py-3 rounded hover:bg-white hover:text-[#00FBF4] border border-[#00FBF4] transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[rgba(0, 0, 0, 0)] shadow-lg rounded-lg border border-white overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <img
              src={cardImage2}
              alt="Service 2"
              className="w-full h-52 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#00FBF4] mb-4">
                App Development
              </h3>
              <p className="text-white mb-6">
                Create user-friendly mobile applications for iOS and Android.
              </p>
              <button className="bg-[#00FBF4] text-white px-5 py-3 rounded hover:bg-white hover:text-[#00FBF4] border border-[#00FBF4] transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[rgba(0, 0, 0, 0)] shadow-lg rounded-lg border border-white overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <img
              src={cardImage3}
              alt="Service 3"
              className="w-full h-52 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#00FBF4] mb-4">
                Digital Marketing
              </h3>
              <p className="text-white mb-6">
                Boost your business with targeted digital marketing strategies.
              </p>
              <button className="bg-[#00FBF4] text-white px-5 py-3 rounded hover:bg-white hover:text-[#00FBF4] border border-[#00FBF4] transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Mission />
      <Solution />
    </div>
  );
};

export default Services;
