import React from 'react';

const Project = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[40px] text-[#00FBF4]">Here are some of our latest projects</h2>
      </div>

      {/* Paragraph */}
      <div className="text-center px-4 mb-12">
        <p className="text-white text-lg">
          We have created a trustworthy relationship with our clients on the basis of our work. Our work speaks about
          our reputation on your behalf. Some of our <br /> standardized projects are mentioned below.
        </p>
      </div>

      {/* Projects section with images */}
      <div className="w-full flex flex-wrap justify-center gap-6 ml-4">
        {/* Project Image 1 */}
        <div className="w-full sm:w-1/3 p-2">
          <img
            src={require('../assets/first.project.png')} // Adjusted path
            alt="First Project"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Project Image 2 */}
        <div className="w-full sm:w-1/3 p-2">
          <img
            src={require('../assets/second.project.png')} // Adjusted path
            alt="Second Project"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Project Image 3 */}
        <div className="w-full sm:w-1/3 p-2">
          <img
            src={require('../assets/31-website.png')} // Adjusted path
            alt="31 Website Project"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
