// src/components/Download.jsx
import { useState } from "react";
import { FiDownload, FiSmartphone } from "react-icons/fi";

const Download = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    alert(
      "Thank you for your interest! VisionAid is currently in development. Please check back soon for download availability."
    );
  };

  return (
    <section
      id="download"
      className="pt-20 pb-6 bg-white/2 text-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="max-w-5xl mx-auto px-5 relative z-10">
        {/* Main Heading */}
        <h2 className="text-5xl font-black mb-8 gradient-text drop-shadow-lg">
          Get VisionAid Today
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience the future of accessibility technology with AI-powered
          navigation and interaction for the visually impaired community.
        </p>

        {/* Download Button */}
        {/* <div className="mb-8">
          <button
            onClick={handleDownload}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group shadow-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
            <FiDownload
              className={`text-xl transition-transform duration-300 ${
                isHovered ? "rotate-12" : ""
              }`}
            />
            Download VisionAid
          </button>
        </div> */}

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-6 py-2 text-yellow-300 font-medium">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          Currently in development phase
        </div>

        {/* Platform Icons */}
        {/* <div className="mt-12 flex justify-center gap-8">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-3 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
              <FiSmartphone className="text-2xl" />
            </div>
            <span className="text-sm text-gray-400">Mobile App</span>
          </div>
        </div> */}

        {/* Features Preview */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-400 text-xl">🔍</span>
            </div>
            <h4 className="font-semibold mb-2">Text Recognition</h4>
            <p className="text-sm text-gray-400">Advanced OCR technology</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-400 text-xl">🎯</span>
            </div>
            <h4 className="font-semibold mb-2">Object Detection</h4>
            <p className="text-sm text-gray-400">
              Real-time object recognition
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-400 text-xl">🌍</span>
            </div>
            <h4 className="font-semibold mb-2">Scene Description</h4>
            <p className="text-sm text-gray-400">
              AI-powered environment analysis
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-400 text-xl">⚠️</span>
            </div>
            <h4 className="font-semibold mb-2">Hazard Detection</h4>
            <p className="text-sm text-gray-400">Intelligent safety system</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6">
            Get notified when VisionAid is available for download
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors"
            />
            <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Notify Me
            </button>
          </div>
        </div>

        <div class="border-t border-white/10 mt-16 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-gray-500 text-sm">
              &copy; 2025 VisionAid Team. Developed for IEEE Student Day
              Competition.
            </p>

            <div class="flex gap-4">
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
