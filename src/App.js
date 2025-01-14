import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // Changed BrowserRouter to HashRouter
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; 
import BackgroundOverlay from './components/BackgroundOverlay'; 
import WhatsAppIcon from './components/WhatsAppIcon'; 
import Introduction from './components/Introduction';
import Version from './components/version'; 
import Footer from './components/Footer'; // Import Footer component
import Progress from './components/Progress'; // Import the Progress component
import Mission from './components/Mission';
import Solution from './components/Solution';
import Reviews from './components/Reviews'; // Import Reviews component
import Project from './components/Project';
import Article from './components/Article';
import AboutUs from "./pages/AboutUs"; // Imported component
import Services from "./pages/Services";
import Training from "./pages/Training";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";

const Home = () => (
  <div>
    <HeroSection />
    <div className="min-h-screen">
      <Introduction />
      <Version />
      <Progress /> {/* Render the Progress component */}
      <Mission />
      <Solution />
      <Reviews /> {/* Render the Reviews component */}
      <Project />
      <Article />
      <div className="p-4"></div>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="min-h-screen">
    <div className="p-4">Services Page Content</div>
  </div>
);

const TrainingPage = () => (
  <div className="min-h-screen">
    <div className="p-4">Training Page Content</div>
  </div>
);

const PortfolioPage = () => (
  <div className="min-h-screen">
    <div className="p-4">Portfolio Page Content</div>
  </div>
);

const ContactUsPage = () => (
  <div className="min-h-screen">
    <div className="p-4"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <BackgroundOverlay />
      <Navbar />
      <div className="mt-16 flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>
      <WhatsAppIcon />
    </Router>
  );
};

export default App;
