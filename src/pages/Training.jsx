import React from "react";
import imagPath from "../assets/training.jpg";
import training1 from "../assets/training1.jpg";
import training2 from "../assets/training2.jpg";
import training3 from "../assets/training3.jpg";
import training4 from "../assets/training4.jpg";
import training5 from "../assets/training5.jpg";
import training6 from "../assets/training6.jpg";
import training7 from "../assets/training7.jpg";
import training8 from "../assets/training8.jpg";
import training9 from "../assets/training9.jpg";
import training10 from "../assets/training10.jpg";
import training11 from "../assets/training11.jpg";
import training12 from "../assets/training12.jpg";
import training13 from "../assets/training13.jpg";
import training14 from "../assets/training14.jpg";
import training15 from "../assets/training15.jpg";

const Training = () => {
  const cardData = [
    { id: 1, image: training1, title: "Intro to Programming", description: "Learn the fundamentals of programming and build your first application." },
    { id: 2, image: training2, title: "Web Development Basics", description: "Understand the basics of web development including HTML, CSS, and JavaScript." },
    { id: 3, image: training3, title: "Advanced JavaScript", description: "Deep dive into JavaScript concepts like closures, promises, and async/await." },
    { id: 4, image: training4, title: "Front-End Frameworks", description: "Learn modern front-end frameworks like React, Angular, and Vue.js." },
    { id: 5, image: training5, title: "Back-End Development", description: "Learn server-side development with Node.js, Express, and databases like MongoDB." },
    { id: 6, image: training6, title: "Full Stack Development", description: "Become a full-stack developer by mastering both front-end and back-end technologies." },
    { id: 7, image: training7, title: "Data Structures & Algorithms", description: "Understand and implement important data structures and algorithms used in coding interviews." },
    { id: 8, image: training8, title: "Cloud Computing Basics", description: "Learn the fundamentals of cloud platforms like AWS, Azure, and Google Cloud." },
    { id: 9, image: training9, title: "Cybersecurity Fundamentals", description: "Understand the basics of cybersecurity and learn how to protect applications and data." },
    { id: 10, image: training10, title: "Database Management", description: "Learn SQL and NoSQL databases and how to manage large datasets efficiently." },
    { id: 11, image: training11, title: "Mobile App Development", description: "Learn how to develop mobile apps for iOS and Android using frameworks like React Native." },
    { id: 12, image: training12, title: "DevOps and Automation", description: "Understand the practices and tools of DevOps to automate workflows and improve software delivery." },
    { id: 13, image: training13, title: "Machine Learning Basics", description: "Learn the fundamentals of machine learning, including supervised and unsupervised learning techniques." },
    { id: 14, image: training14, title: "AI Development", description: "Dive into artificial intelligence and explore AI frameworks and tools for building intelligent systems." },
    { id: 15, image: training15, title: "Blockchain Development", description: "Learn the basics of blockchain technology and how to build decentralized applications (DApps)." },
  ];

  return (
    <div>
      {/* Header Section */}
      <div
        className="h-[46vh] bg-cover bg-center flex flex-col justify-center items-center overflow-hidden relative"
        style={{
          backgroundImage: `url(${imagPath})`,
          backgroundPosition: "center",
        }}
      >
        {/* Transparent Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-center text-[#00FBF4] text-[112px] font-semibold">
            Trainin<span className="text-white">g</span>
          </h1>
          <h1 className="text-white text-center text-[17px]">
            Home - <span className="">training</span>
          </h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-black-900 p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-black border border-white rounded-none shadow-lg overflow-hidden flex flex-col justify-between"
            >
              {/* Card Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
              />

              {/* Card Content */}
              <div className="p-4 text-center">
                <h2 className="text-white text-lg font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-300 text-sm">{card.description}</p>
              </div>

              {/* View More Button */}
              <div className="flex justify-center p-4">
                <button className="bg-[#00FBF4] text-black font-bold py-2 px-4 rounded hover:bg-[#00c2be] transition">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
