import React from 'react';
import backgroundImage from '../assets/Background-21.png'; // Import the image

const BackgroundOverlay = () => {
  return (
    <div
      className="fixed inset-0 z-[-1]" // Background image layer
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image as the background
        backgroundSize: 'cover', // Ensure the image covers the full area
        backgroundPosition: 'center', // Position the image in the center
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      }}
    >
      {/* Apply a semi-transparent black overlay */}
      <div
        className="absolute inset-0 z-0" // Ensure overlay is above the background image
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        }}
      ></div>
    </div>
  );
};

export default BackgroundOverlay;
