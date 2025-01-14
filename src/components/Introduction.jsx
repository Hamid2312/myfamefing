import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import computerImage from "../assets/computer image for card.png";
import mobileSettingImage from "../assets/mobile setting image for card.png";
import seoImage from "../assets/Seo image for card.png";
import socialMediaLogo from "../assets/social media logo for card.png";

const Introduction = () => {
  const [cards] = useState([
    {
      image: computerImage,
      skill: "Web Development",
      description:
        "Our web development services involve the Design, Creation, and maintenance of websites for our clients. A good website can boost online presence, provide information about products, establish communication, and drive sales.",
    },
    {
      image: mobileSettingImage,
      skill: "App Development",
      description:
        "We have extensive experience in developing mobile apps for various platforms. Our team can design user-friendly interfaces, integrate back-end systems, and optimize your app for performance.",
    },
    {
      image: seoImage,
      skill: "SEO",
      description:
        "Search engine optimization involves strategies to improve site visibility on search engines. Our expertise includes keyword research, content optimization, and performance analytics.",
    },
    {
      image: socialMediaLogo,
      skill: "Digital & Social Marketing",
      description:
        "Famefing Technologies specializes in proactive digital marketing strategies that transform ideas into successful realities. We help businesses stand out in a competitive market.",
    },
  ]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative py-10 px-4 sm:px-6 lg:px-10 text-left">
      {/* Welcome Text */}
      <h1 className="text-lg text-[#00FBF4] mb-2 sm:text-xl">Welcome to Famefing</h1>

      {/* IT Partner Heading with Stats */}
      <div className="flex flex-col lg:flex-row items-start justify-between mb-8 lg:mb-0">
        <div>
          <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">Let Us Be Your</p>
          <span className="text-[#00FBF4] text-4xl sm:text-5xl lg:text-6xl font-bold">
            IT Partner
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 mt-6 lg:mt-0 lg:ml-8">
          <div className="flex flex-col items-center">
            <span className="text-[#00FBF4] text-5xl sm:text-6xl font-bold">
              {inView && <CountUp start={0} end={10} duration={2} />}+
            </span>
            <span className="text-white text-lg sm:text-xl font-medium mt-2">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#00FBF4] text-5xl sm:text-6xl font-bold">
              {inView && <CountUp start={0} end={100} duration={2} />}+
            </span>
            <span className="text-white text-lg sm:text-xl font-medium mt-2">
              Projects Completed
            </span>
          </div>
        </div>
      </div>

      {/* Business Paragraph */}
      <p className="text-base sm:text-lg text-white mb-8 max-w-xl leading-relaxed">
        Our business is about technology, yes. But it's also about operations and customer relationships.
      </p>

      {/* Skill Bars */}
      <div className="mt-8 space-y-6 text-[#00FBF4]">
        {[
          { skill: "Marketing", width: "45%" },
          { skill: "Management", width: "43%" },
          { skill: "Web Development", width: "48%" },
          { skill: "Graphic Design", width: "42%" },
        ].map((bar, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <p className="text-[#00FBF4] text-sm sm:text-base">{bar.skill}</p>
            </div>
            <div className="relative w-full bg-gray-700 rounded-md">
              <div
                className="bg-[#00FBF4] h-2 rounded-md transition-all duration-1000 ease-in-out"
                style={{ width: inView ? bar.width : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Transparent Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-black bg-opacity-40 border border-white p-4 hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <div className="w-full flex justify-center mb-4">
              <img
                src={card.image}
                alt={card.skill}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                {card.skill}
              </h3>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
