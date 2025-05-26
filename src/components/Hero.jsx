import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { PiAndroidLogo, PiAndroidLogoBold } from "react-icons/pi";
import { TbBrandAndroid } from "react-icons/tb";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDownload = () => {
    alert(
      "Thank you for your interest! VisionAid is currently in development. Please check back soon for download availability."
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-radial"></div>

      <div className="max-w-7xl mx-auto px-5 relative z-10 mt-28 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div
            className={`text-center lg:col-span-2 lg:text-left transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight gradient-text drop-shadow-lg">
              Empowering Vision Through Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              AI-powered accessibility app with text recognition, object
              detection, scene description, and hazard detection.
            </p>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group shadow-xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 flex items-center"></span>
              {/* <FiDownload className="text-xl" /> */}
              <PiAndroidLogoBold className="text-2xl pt-0.5" />
              <span>Download VisionAid</span>
            </button>
          </div>

          <div
            className={`w-full flex justify-center transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-64 h-[500px] bg-gray-800 rounded-[40px] border-8 border-gray-600 shadow-2xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-[32px]"
                src="/assets/images/app-preview.jpg"
                alt="VisionAid App Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
