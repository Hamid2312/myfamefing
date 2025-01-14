import React from "react";

const Solution = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black px-8 py-28">
      <div className="w-full">
        {/* Heading */}
        <h1 className="text-left text-[50px] font-montserrat font-bold leading-tight">
          <span className="text-white">We Are </span>
          <span className="text-[#00FBF4]">Perfect Solutions</span>
          <br />
          <span className="text-white">For </span>
          <span className="text-[#00FBF4]">Your Business</span>
        </h1>

        {/* Quote */}
        <p className="text-white text-[17px] font-sans mt-6">
          “Success usually comes to those who are too busy to be looking for it.”
        </p>

        {/* Points */}
        <ul className="text-white text-[18px] font-sans mt-8 space-y-2 mb-28">
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

        {/* Pricing Plan Mini Heading */}
        <h2 className="text-center text-[#00FBF4] text-[20px] font-bold mt-56">
          Pricing Plan
        </h2>
      </div>

      {/* Choose Your Plan Heading */}
      <h1 className="text-[60px] font-bold text-white font-sans font-montserrat mt-2">
        Choose Your <span className="text-[#00FBF4]">Plan</span>
      </h1>

      {/* Cards Section */}
      <div className="flex justify-center gap-12 mt-16 relative">
     {/* Card 1 */}
<div className="group bg-[#0D1B1B] text-white w-[380px] h-[670px] flex flex-col items-center justify-between p-8 hover:shadow-[0px_0px_25px_15px_#0a4f45] transition-all duration-300 delay-75">
  <div className="text-center">
    <h3 className="text-3xl font-bold mb-2">Basic</h3>
    <p className="text-[#00FBF4] text-6xl font-bold mb-1">$111</p>
    <p className="text-lg text-white mt-7">Per Month</p>
  </div>
  <ul className="text-lg text-center text-white space-y-2 text-left mt-4">
    <li>Social Channels <br /> Facebook, Instagram</li>
    <li>Social Media Marketing Strategy</li>
    <li>Content Calendar & Content Creation</li>
    <li>12 Posts</li>
    <li>1 Video Reel</li>
    <li>Advertisement Campaign</li>
    <li>Ads Payment Include 8%</li>
    <li>Monthly Reporting</li>
  </ul>
  <button className="px-[40px] py-[12px] mt-2 border-2 border-[#00FBF2] text-[#00FBF2] bg-black text-lg font-montserrat hover:bg-white hover:text-black hover:scale-95 transition-transform duration-300">
    Choose Plan
  </button>
</div>

{/* Card 2 (No change) */}
<div className="relative bg-[#0D1B1B] text-white w-[380px] h-[670px] flex flex-col items-center justify-between p-8 shadow-[0px_0px_25px_15px_#0a4f45]">
  {/* Bestseller Bar */}
  <div className="absolute -top-8 left-0 w-[380px] bg-[#00FBF4] text-white text-[26px] text-center py-5 font-bold"> {/* Increased height to py-4 */}
    Bestseller
  </div>

  <div className="text-center mt-[50px]"> {/* Adjusted for the bar height */}
    <h3 className="text-3xl font-bold mb-2">Premium</h3>
    <p className="text-[#00FBF4] text-6xl font-bold mb-1">$169</p>
    <p className="text-lg text-white mt-7">Per Month</p>
  </div>
  <ul className="text-lg text-center text-white space-y-2 text-left mt-4">
    <li>Social Channels <br /> Facebook, Instagram & LinkedIn</li>
    <li>Social Media Marketing Strategy</li>
    <li>20 Posts</li>
    <li>Content Calendar</li>
    <li>4 Video Reels</li>
    <li>Advertisement Campaign</li>
    <li>Ads Payment Include 15%</li>
    <li>Monthly Reporting</li>
  </ul>
  <button className="px-[40px] py-[12px] mt-2 border-2 border-[#00FBF2] text-[#00FBF2] bg-black text-lg font-montserrat hover:bg-white hover:text-black hover:scale-95 transition-transform duration-300">
    Choose Plan
  </button>
</div>

{/* Card 3 */}
<div className="group bg-[#0D1B1B] text-white w-[380px] h-[670px] flex flex-col items-center justify-between p-8 hover:shadow-[0px_0px_25px_15px_#0a4f45] transition-all duration-300 delay-75">
  <div className="text-center">
    <h3 className="text-3xl font-bold mb-2">Pro</h3>
    <p className="text-[#00FBF4] text-6xl font-bold mb-1">$199</p>
    <p className="text-lg text-white mt-7">Per Month</p>
  </div>
  <ul className="text-lg text-center text-white space-y-2 text-left mt-4">
    <li>Customizable Strategy</li>
    <li>Social Channels <br /> [ALL]</li>
    <li>30 Posts</li>
    <li>Content Calendar</li>
    <li>Video Reels</li>
    <li>Social Discussion</li>
    <li>Monthly Reporting & Goal Evaluation</li>
    <li>Advertisement Campaign</li>
    <li>Ads Payment Include 20%</li>
  </ul>
  <button className="px-[40px] py-[12px] mt-2 border-2 border-[#00FBF2] text-[#00FBF2] bg-black text-lg font-montserrat hover:bg-white hover:text-black hover:scale-95 transition-transform duration-300">
    Choose Plan
  </button>
</div>

        </div>
      </div>
  
  );
};

export default Solution;