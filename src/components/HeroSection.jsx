import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/young-asian-female-it-engineer-pointing-at-data-on-TF8HSL6c.jpg';
import img2 from '../assets/two-female-it-engineers-in-server-room-TMEWJB6c.jpg';
import overlayImg from '../assets/overlay-image.png'; // Overlay image

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const typewriterWords = ['GROW FASTER'];
  const images = [img1, img2];

  // Image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Typewriter effect logic
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = typewriterWords[typewriterIndex];
      if (!isDeleting) {
        setTypewriterText((prev) => currentWord.substring(0, prev.length + 1));
        if (typewriterText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypewriterText((prev) => currentWord.substring(0, prev.length - 1));
        if (typewriterText === '') {
          setIsDeleting(false);
          setTypewriterIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 100 : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [typewriterText, isDeleting, typewriterIndex, typingSpeed]);

  return (
    <section className="relative w-full h-screen bg-black pt-[60px]">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero Background ${index + 1}`}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <img
          src={overlayImg}
          alt="Overlay"
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-10 pointer-events-none"
        />
      </div>

      {/* Responsive Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#00FBF4] p-6 sm:p-8 md:text-left md:items-start z-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 pt-12">
          DREAM TOGETHER{' '}
          <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {typewriterText}
            <span className="blinking-cursor">|</span>
          </span>
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg font-sans mb-6 text-white leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Understanding critical issues in IT management involves leveraging the latest technologies and following best
          <br />
          practices in project management.
        </p>
        <Link to="/contact">
          <button className="px-6 sm:px-8 py-2 sm:py-3 mt-2 border-2 border-[#00FBF2] text-[#00FBF2] bg-black text-sm sm:text-lg font-montserrat hover:bg-white hover:text-black hover:scale-95 transition-transform duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
