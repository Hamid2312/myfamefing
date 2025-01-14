// WhatsAppIcon.jsx
import React from 'react';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+923140651355" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
      style={{
        width: '60px',    // Set width
        height: '60px',   // Set height
        fontSize: '30px', // Icon size
      }}
    >
      <i className="fab fa-whatsapp"></i> {/* FontAwesome WhatsApp icon */}
    </a>
  );
};

export default WhatsAppIcon;
