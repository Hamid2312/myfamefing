import React from "react";
import databaseImage from "../assets/database image.png";
import performanceImage from "../assets/perfomance image.png";
import hackerImage from "../assets/female-hacker-wearing-a-hoodie-using-a-dangerous-v-XLRB4XRa.jpg";
import adminImage from "../assets/confident-system-administrator-working-on-laptop-i-L83JYCD.jpg";
import engineersImage from "../assets/data-engineers-in-blue-light-LX8HUA4.jpg";

const Progress = () => {
  return (
    <div className="bg-[#080808] px-8 sm:px-16 py-16 sm:py-32">
      {/* Section Heading */}
      <h2 className="text-[#00FBF4] text-lg sm:text-xl mb-4">Why choose us</h2>

      {/* Main Heading and Cards Section */}
      <div className="flex flex-col md:flex-row items-start justify-between">
        {/* Main Heading */}
        <div className="md:w-2/3">
          <h1 className="font-montserrat font-sans font-semibold text-white text-4xl sm:text-5xl md:text-[70px] leading-tight">
            Our Goal is
            <br />
            <span className="text-[#00FBF4]">Giving the Best</span>
            <br />
            For
            <span className="text-[#00FBF4]"> IT Services.</span>
          </h1>

          {/* Paragraph */}
          <p className="text-white text-sm sm:text-[18px] font-poppins mt-4">
            Famefing Technologies is a fast-growing IT company that specializes
            in Voice Solutions, Mobile App Development & Business Processing
            Outsourcing services. Our customers can expect excellent digital
            solutions, a fast turnaround, and a personal, friendly service. We
            offer competitive prices to fit in with our customers’ budgets for
            their upcoming projects.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap gap-6 mt-8 md:mt-0 md:ml-8 justify-center md:justify-start">
          {/* Card 1 */}
          <div className="bg-black p-8 shadow-lg w-[280px] sm:w-80 h-[450px]">
            <img
              src={databaseImage}
              alt="Database"
              className="w-full h-60 object-contain mb-4"
            />
            <div className="mt-4">
              <p className="text-white text-lg">Secure Database</p>
              <p className="text-[#00FBF4] text-3xl font-bold">Data Base</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black p-8 shadow-lg w-[280px] sm:w-80 h-[450px]">
            <img
              src={performanceImage}
              alt="Performance"
              className="w-full h-60 object-contain mb-4"
            />
            <div className="mt-4">
              <p className="text-white text-lg">Performance Speed</p>
              <p className="text-[#00FBF4] text-3xl font-bold">Performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="mt-16 md:mt-20 text-center">
        <h2 className="text-[#00FBF4] text-xl">Case Studies</h2>
        <h3 className="text-white text-4xl sm:text-5xl md:text-7xl font-montserrat font-bold mt-4">
          Latest <span className="text-[#00FBF4]">Showcase</span> &{" "}
          <span className="text-[#00FBF4]">Solutions</span> to
        </h3>
        <h3 className="text-[#00FBF4] text-4xl sm:text-5xl md:text-7xl font-montserrat font-bold mt-2">
          IT Solutions
        </h3>
      </div>

      {/* Additional Images Section */}
      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {[{
          image: hackerImage,
          title: "Artificial Intelligence",
        }, {
          image: adminImage,
          title: "IOS & Web Development",
        }, {
          image: engineersImage,
          title: "Digital & Social Marketing",
        }].map((item, index) => (
          <div
            key={index}
            className="relative group w-[325px] sm:w-[385px] h-[450px] sm:h-[550px] overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-start p-6 bottom-0">
              {/* Circular Icon */}
              <div className="w-12 h-12 rounded-full border-2 border-[#00FBF4] flex justify-center items-center mb-4">
                <span className="text-[#00FBF4] text-xl font-bold">+</span>
              </div>
              {/* Heading */}
              <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
              {/* Read More Button */}
              <button className="px-[40px] py-[12px] mt-2 border-2 border-[#00FBF4] text-[#00FBF4] bg-black text-lg font-montserrat hover:bg-white hover:text-black hover:scale-95 transition-transform duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
