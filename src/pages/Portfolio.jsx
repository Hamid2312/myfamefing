import React from 'react';
import imagePath from '../assets/portfolio.jpg';
import projectImage1 from '../assets/project1.jpg';
import projectImage2 from '../assets/project2.jpg';
import projectImage3 from '../assets/project3.jpg';
import projectImage4 from '../assets/project4.jpg';
import projectImage5 from '../assets/project5.jpg';
import projectImage6 from '../assets/project6.jpg';
import projectImage7 from '../assets/project7.jpg';
import projectImage8 from '../assets/project8.jpg';

const Portfolio = () => {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <div
        className="h-[46vh] bg-cover bg-center flex flex-col justify-center items-center overflow-hidden relative"
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundPosition: 'center',
        }}
      >
        {/* Transparent Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-center text-[#00FBF4] text-[80px] sm:text-[112px] font-semibold">
            Project<span className="text-white">Portfolio</span>
          </h1>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-12 px-6 md:px-16">
        <h2 className="text-[#00FBF4] text-3xl sm:text-4xl font-bold text-center mb-8">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Cards */}
          {[  
            { image: projectImage1, title: "E-Commerce Website", description: "A responsive e-commerce platform with advanced shopping cart features." },
            { image: projectImage2, title: "Portfolio Website", description: "A personal portfolio showcasing design skills and project experience." },
            { image: projectImage3, title: "Social Media App", description: "A modern social media application with real-time chat functionality." },
            { image: projectImage4, title: "Blogging Platform", description: "A feature-rich blogging platform with user authentication." },
            { image: projectImage5, title: "Learning Management System", description: "An interactive LMS for online courses and certifications." },
            { image: projectImage6, title: "Real Estate Website", description: "A sleek platform for buying, selling, and renting properties." },
            { image: projectImage7, title: "Weather Forecast App", description: "A dynamic weather app with real-time updates and location tracking." },
            { image: projectImage8, title: "Task Management Tool", description: "A productivity tool for managing tasks and team collaborations." }
          ].map((project, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-70 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-white h-[350px] sm:h-[400px] lg:h-[350px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#00FBF4] mb-4">
                  {project.title}
                </h3>
                <p className="text-white mb-6 text-sm sm:text-base">
                  {project.description}
                </p>
                <button className="bg-[#00FBF4] text-white px-4 py-2 rounded hover:bg-white hover:text-[#00FBF4] border border-[#00FBF4] transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
