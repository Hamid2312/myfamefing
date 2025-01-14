import React from "react";
import imagePath from "../assets/contactus.jpg";

const ContactUs = () => {
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
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl md:text-7xl lg:text-[112px] font-semibold">
            Contact<span className="text-white"></span>
          </h1>
          <h1 className="text-white text-[14px] sm:text-[17px] mt-4">
            Home - <span className="text-[#00FBF4] hover:text-white">contact</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center min-h-screen bg-black px-8 py-20 sm:py-28">
        <div className="w-full max-w-4xl">
          {/* Heading */}
          <h1 className="text-left text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold leading-tight">
            <span className="text-white">We Are </span>
            <span className="text-[#00FBF4]">Perfect Solutions</span>
            <br />
            <span className="text-white">For </span>
            <span className="text-[#00FBF4]">Your Business</span>
          </h1>

          {/* Quote */}
          <p className="text-white text-base sm:text-lg font-sans mt-6">
            “Success usually comes to those who are too busy to be looking for it.”
          </p>

          {/* Points */}
          <ul className="text-white text-[16px] sm:text-[18px] font-sans mt-8 space-y-2 mb-20">
            <li className="flex items-start">
              <span className="text-[#00FBF4] mr-3">&#10003;</span>
              We are committed to providing quality business IT Services
            </li>
            <li className="flex items-start">
              <span className="text-[#00FBF4] mr-3">&#10003;</span>
              Really know the true needs and expectations of customers
            </li>
            <li className="flex items-start">
              <span className="text-[#00FBF4] mr-3">&#10003;</span>
              Provided by experts to help challenge critical activities
            </li>
            <li className="flex items-start">
              <span className="text-[#00FBF4] mr-3">&#10003;</span>
              Processes of achieving the excellence improvements
            </li>
          </ul>

          {/* Contact Form */}
          <div className="bg-black p-8 rounded-lg shadow-xl">
            <h2 className="text-[#00FBF4] text-2xl sm:text-3xl font-semibold mb-6 text-center">
              Get In Touch
            </h2>
            <form className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-semibold text-[16px] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 text-black rounded-md border-2 border-[#00FBF4] bg-white focus:outline-none focus:ring-2 focus:ring-[#00FBF4] focus:border-transparent"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold text-[16px] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 text-black rounded-md border-2 border-[#00FBF4] bg-white focus:outline-none focus:ring-2 focus:ring-[#00FBF4] focus:border-transparent"
                />
              </div>

              {/* Address Field */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-white font-semibold text-[16px] mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  className="w-full p-3 text-black rounded-md border-2 border-[#00FBF4] bg-white focus:outline-none focus:ring-2 focus:ring-[#00FBF4] focus:border-transparent"
                />
              </div>

              {/* Website Field */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-white font-semibold text-[16px] mb-2"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="Enter your website"
                  className="w-full p-3 text-black rounded-md border-2 border-[#00FBF4] bg-white focus:outline-none focus:ring-2 focus:ring-[#00FBF4] focus:border-transparent"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#00FBF4] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#00c2be] transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
