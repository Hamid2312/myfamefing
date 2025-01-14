import React from "react";
import technicianImage from "../assets/young-technician-in-server-room-PTS25P2.png";

const Mission = () => {
  return (
    <div className="relative py-10 px-8 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section: Text and Button */}
      <div className="z-10 flex flex-col items-start space-y-6">
        {/* Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-[60px] font-montserrat font-bold leading-tight">
          <span className="text-[#00FBF4]">Mission</span> is to{" "}
          <span className="text-[#00FBF4]">Protect</span> Your
          <br />
          <span className="text-white">Businesses & Much More</span>
        </h1>

        {/* Discover More Button */}
        <button className="inline-block w-[180px] h-[50px] text-[17.6px] font-sans text-[#00FBF2] border-2 border-[#00FBF2] bg-black transition-all duration-300 transform hover:text-black hover:bg-white hover:border-[#00FBF2] hover:scale-95 hover:translate-x-[-5px] mt-6 sm:mt-10">
          Discover More
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="absolute md:static right-10 bottom-0 md:ml-10 mt-8 sm:mt-16">
        <img
          src={technicianImage}
          alt="Technician in server room"
          className="w-[230px] h-auto md:w-[270px] lg:w-[300px] object-cover"
        />
      </div>
    </div>
  );
};

export default Mission;
