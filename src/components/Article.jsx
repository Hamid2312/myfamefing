import Facebook from '../assets/Facebook.png';
import Twitter from '../assets/twitter.png';
import LinkedIn from '../assets/linkedin.png';
import YouTube from '../assets/youtube.png';
import ImagePreview from '../assets/image-removebg-preview-11.png';
import Likee from '../assets/likee.png';
import TikTok from '../assets/tiktok.png';
import SnackVideo from '../assets/snackvedio.png';

const Article = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative">
      {/* Mini Heading */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-[#00FBF4]">Our Blog</h2>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-12">
        <h3 className="text-6xl font-bold text-white">
          Latest <span className='text-[#00FBF4]'>News & Articles</span>
        </h3>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-wrap justify-center gap-8">
        {/* First Card */}
        <div className="bg-black bg-opacity-70 p-6 rounded-none w-[420px] h-[380px] flex flex-col justify-between border-2 border-white border-opacity-30">
          <h4 className="text-3xl font-semibold text-[#00FBF4] mb-4">Who Can Benefit from a Comprehensive...</h4>
          <p className="text-[#DADADA]  text-[18px]">INTRODUCTION: Business Process Outsourcing (BPO) has turned into a foundation in present day business procedures, empowering organizations to zero in on their center skills while re-appropriating non-center capabilities to outer…</p>
          {/* Learn More Button */}
          <button className="px-[20px] py-[12px] mt-2 border-2 border-[#00FBF2] text-[#00FBF2] bg-black text-lg font-montserrat hover:bg-white hover:text-black hover:scale-95 transition-transform duration-300">
            Learn More
          </button>
        </div>

        {/* Second Card */}
        <div className="bg-black bg-opacity-70 p-6 rounded-none w-[420px] h-[350px] flex flex-col justify-between border-2 border-white border-opacity-30">
          <h4 className="text-3xl font-semibold text-[#00FBF4] mb-4">Who Can Benefit from Shopify: The...</h4>
          <p className="text-[#DADADA]  text-[18px]">INTRODUCTION: In the present advanced age, laying out a web-based store has become fundamental for organizations, all things considered. Whether you’re a little startup or a deeply grounded brand, Shopify…</p>
          {/* Learn More Button */}
          <button className="px-[20px] py-[12px] mt-2 border-2 border-[#00FBF2] text-[#00FBF2] bg-black text-lg font-montserrat hover:bg-white hover:text-black hover:scale-95 transition-transform duration-300">
            Learn More
          </button>
        </div>

        {/* Third Card */}
        <div className="bg-black bg-opacity-70 p-6 rounded-none w-[420px] h-[350px] flex flex-col justify-between border-2 border-white border-opacity-30">
          <h4 className="text-3xl font-semibold text-[#00FBF4] mb-4">Who Benefits from Videographics in the...</h4>
          <p className="text-[#DADADA] text-[18px]">INTRODUCTION: Videographics, a combination of video and designs, has quickly acquired conspicuousness in the realm of computerized correspondence. As innovation keeps on advancing, so does the manner in which we…</p>
          {/* Learn More Button */}
          <button className="px-[20px] py-[12px] mt-2 border-2 border-[#00FBF2] text-[#00FBF2] bg-black text-lg font-montserrat hover:bg-white hover:text-black hover:scale-95 transition-transform duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Rectangular Bar with Images */}
      <div className="flex justify-evenly items-center bg-[#00FBF4] py-6 w-[90%] mt-12 mx-16  rounded-none">
        <img src={Facebook} alt="Facebook" className="w-35 h-20" />
        <img src={Twitter} alt="Twitter" className="w-20 h-20" />
        <img src={LinkedIn} alt="LinkedIn" className="w-16 h-auto" />
        <img src={YouTube} alt="YouTube" className="w-16 h-auto" />
        <img src={ImagePreview} alt="Image" className="w-16 h-auto" />
        <img src={Likee} alt="Likee" className="w-16 h-auto" />
        <img src={TikTok} alt="TikTok" className="w-16 h-auto" />
        <img src={SnackVideo} alt="Snack Video" className="w-16 h-auto" />
      </div>
    </div>
  );
};

export default Article;
