import React from 'react';
import logoImage from '../WhatsApp_Image_2024-01-29_at_14.15.44_a1d382f1-removebg-preview.png'; // Import image
import overlayImage from '../assets/overlay-image.png'; // Import your overlay image

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10 mt-8 relative"> {/* Blackish background with slight greenish hint */}
      {/* Overlay Image as background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
        style={{ backgroundImage: `url(${overlayImage})` }}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo and Sections Container */}
        <div className="flex flex-wrap justify-between items-start mb-4">
          {/* Logo Section */}
          <div className="flex flex-col items-start mb-4">
            <img
              src={logoImage}
              alt="Your Company Logo"
              className="h-12 mb-2" // Adjusted margin to reduce space below logo
            />
            {/* Famefing Introduction Paragraph Directly Below Logo */}
            <p className="text-white max-w-3xl text-[16px] font-poppins font-sans">
              Famefing is one of the leading<br /> Business Solution Agencies around<br /> the Globe. Give Famefing a try and<br /> let us make your brand fly.
            </p>
          </div>

          {/* Company Section */}
          <div className="flex flex-col items-start ml-4 mt-0">
            <h3 className="text-[#00FBF4] text-[22.3px] font-montserrat font-sans font-semibold">Company</h3>
            <p className="text-[16px] font-poppins font-sans">About</p>
            <p className="text-[16px] font-poppins font-sans">Contact Us</p>
            <p className="text-[16px] font-poppins font-sans">Services</p>
            <p className="text-[16px] font-poppins font-sans">Pricing</p>
          </div>

          {/* Useful Links Section */}
          <div className="flex flex-col items-start ml-4 mt-0">
            <h3 className="text-[#00FBF4] text-[22.3px] font-montserrat font-sans font-semibold">Useful Links</h3>
            <p className="text-[16px] font-poppins font-sans">FAQS</p>
            <p className="text-[16px] font-poppins font-sans">Case Details</p>
            <p className="text-[16px] font-poppins font-sans">Our Team</p>
            <p className="text-[16px] font-poppins font-sans">Blogs</p>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-start ml-4 mt-0">
            <h3 className="text-[#00FBF4] text-[22.3px] font-montserrat font-sans font-semibold">Contact Info</h3>
            <p className="text-[16px] font-poppins font-sans">DHA Phase 4, Lahore</p>
            <p className="text-[16px] font-poppins font-sans">10:00 AM - 6:00 PM</p>
            <p className="text-[16px] font-poppins font-sans">+92-328-4503-240</p>
            <p className="text-[16px] font-poppins font-sans">contact@famefing.com</p>
          </div>
        </div>
        <hr />

        {/* Footer Links and Copyright Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        </div>

      </div>
    </footer>
  );
};

export default Footer;
