import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { FiFileText, FiTarget, FiGlobe, FiAlertTriangle } from "react-icons/fi";
import { useLottie } from "../hooks/useLottie";

const Features = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [forceVisible, setForceVisible] = useState(false);
  const observerRef = useRef(null);
  const cardRefs = useRef({});

  // Load all Lottie animations using the custom hook
  const { animation: textRecognitionAnimation, loading: textLoading } =
    useLottie("/assets/animations/scanning.json");
  const { animation: objectDetectionAnimation, loading: objectLoading } =
    useLottie("/assets/animations/object.json");
  const { animation: sceneDescriptionAnimation, loading: sceneLoading } =
    useLottie("/assets/animations/scene-3.json");
  const { animation: hazardDetectionAnimation, loading: hazardLoading } =
    useLottie("/assets/animations/hazard.json");

  useEffect(() => {
    // Fallback timer - show all cards after 3 seconds if observer fails
    const fallbackTimer = setTimeout(() => {
      console.log("Fallback: Making all features visible");
      setForceVisible(true);
    }, 3000);

    // Enhanced intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            console.log(`Making visible: ${entry.target.id}`);
            setVisibleCards((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: [0, 0.1, 0.25],
        rootMargin: "100px 0px -50px 0px", // Start animation earlier
      }
    );

    // Wait for DOM to be ready then observe
    const setupObserver = () => {
      const cards = document.querySelectorAll(".feature-card");
      console.log(`Found ${cards.length} feature cards`);

      if (cards.length === 4) {
        // Ensure all cards are rendered
        cards.forEach((card) => {
          if (card.id && observerRef.current) {
            observerRef.current.observe(card);
            console.log(`Observing card: ${card.id}`);
          }
        });
      } else {
        // Retry if not all cards are ready
        setTimeout(setupObserver, 200);
      }
    };

    // Setup observer after a delay to ensure DOM is ready
    setTimeout(setupObserver, 500);

    // Manual scroll detection as backup
    const handleScroll = () => {
      Object.keys(cardRefs.current).forEach((id) => {
        const element = cardRefs.current[id];
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible =
            rect.top < window.innerHeight - 100 && rect.bottom > 100;
          if (isVisible) {
            setVisibleCards((prev) => new Set([...prev, id]));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial visibility check
    setTimeout(handleScroll, 1000);

    return () => {
      clearTimeout(fallbackTimer);
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      id: "text-recognition",
      icon: FiFileText,
      title: "Text Recognition",
      description:
        "Advanced OCR technology that reads text aloud, translates to Arabic, and provides AI-powered summaries for better comprehension.",
      features: [
        "Real-time text scanning",
        "Arabic translation support",
        "AI-powered text summaries",
      ],
      animationData: textRecognitionAnimation,
      loading: textLoading,
      borderColor: "border-blue-600",
      accentColor: "bg-blue-500",
    },
    {
      id: "object-detection",
      icon: FiTarget,
      title: "Object Detection",
      description:
        "Real-time object recognition that identifies, locates, and provides audio guidance to help users navigate towards specific objects.",
      features: [
        "Live object identification",
        "Spatial audio guidance",
        "Distance estimation",
      ],
      animationData: objectDetectionAnimation,
      loading: objectLoading,
      borderColor: "border-teal-600",
      accentColor: "bg-teal-500",
    },
    {
      id: "scene-description",
      icon: FiGlobe,
      title: "Scene Description",
      description:
        "Comprehensive AI analysis of surroundings including weather conditions, environmental details, and contextual information.",
      features: [
        "Environmental analysis",
        "Weather detection",
        "Context-aware descriptions",
      ],
      animationData: sceneDescriptionAnimation,
      loading: sceneLoading,
      borderColor: "border-indigo-600",
      accentColor: "bg-indigo-500",
    },
    {
      id: "hazard-detection",
      icon: FiAlertTriangle,
      title: "Hazard Detection",
      description:
        "Intelligent safety system that identifies potential dangers like pits, moving vehicles, and obstacles with immediate audio alerts.",
      features: [
        "Real-time danger detection",
        "Instant audio alerts",
        "Vehicle & obstacle tracking",
      ],
      animationData: hazardDetectionAnimation,
      loading: hazardLoading,
      borderColor: "border-red-600",
      accentColor: "bg-red-500",
    },
  ];

  const FeatureCard = ({ feature, index, isReversed = false }) => {
    const isVisible = visibleCards.has(feature.id) || forceVisible;
    const IconComponent = feature.icon;

    return (
      <div
        id={feature.id}
        ref={(el) => {
          cardRefs.current[feature.id] = el;
        }}
        className={`w-fit grid lg:grid-cols-2 gap-16 items-center feature-card transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{
          transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
          minHeight: "500px", // Ensure consistent height
        }}
      >
        {/* Text Content - Order changes based on isReversed */}
        <div
          className={`space-y-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className={`p-4 bg-white/10 rounded-2xl shadow-lg border-2 ${feature.borderColor} backdrop-blur-sm`}
            >
              <IconComponent className="text-4xl text-white" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {feature.title}
            </h3>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed text-justify w-96 md:w-[28rem]">
            {feature.description}
          </p>
          <ul className="space-y-4 text-gray-300 pl-4">
            {feature.features.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 group">
                <div
                  className={`w-3 h-3 ${feature.accentColor} rounded-full group-hover:scale-125 transition-transform duration-200 flex-shrink-0`}
                ></div>
                <span className="group-hover:text-white transition-colors duration-200 text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Animation Container - Order changes based on isReversed */}
        <div
          className={`flex justify-center ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative group">
            {/* Glow effect background */}
            <div
              className={`absolute -inset-2 bg-gradient-to-r ${feature.borderColor.replace(
                "border-",
                "from-"
              )} to-transparent rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
            ></div>

            <div
              className={`relative animate-pulse h-96 w-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border-2 ${feature.borderColor} flex items-center justify-center overflow-hidden group-hover:scale-105 transition-all duration-300`}
            >
              {feature.animationData && !feature.loading ? (
                <Lottie
                  animationData={feature.animationData}
                  loop={true}
                  autoplay={isVisible}
                  className="w-full h-full p-6 scale-110"
                />
              ) : feature.loading ? (
                // Enhanced loading state
                <div className="text-center text-gray-400">
                  <div
                    className={`animate-spin rounded-full h-16 w-16 border-b-4 ${feature.borderColor.replace(
                      "border-",
                      "border-"
                    )} mx-auto mb-4`}
                  ></div>
                  <p className="text-sm animate-pulse font-medium">
                    Loading Animation...
                  </p>
                </div>
              ) : (
                // Enhanced fallback
                <div className="text-center text-gray-400 p-8">
                  <div
                    className={`p-6 rounded-full ${feature.accentColor} bg-opacity-20 mx-auto mb-4 w-fit`}
                  >
                    <IconComponent className="text-7xl opacity-80" />
                  </div>
                  <p className="text-sm">
                    <span className="block font-medium text-white mb-1">
                      Ready for Animation
                    </span>
                    <span className="text-xs opacity-60">
                      {feature.id}.json
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* Animated accent dot */}
            {/* <div
              className={`absolute -top-2 -right-2 w-6 h-6 ${feature.accentColor} rounded-full shadow-lg`}
            >
              <div
                className={`absolute inset-0 ${feature.accentColor} rounded-full animate-ping opacity-75`}
              ></div>
              <div
                className={`relative w-full h-full ${feature.accentColor} rounded-full`}
              ></div>
            </div> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="features" className="py-24 relative">
      <div className="w-screen flex flex-col items-center justify-center">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 gradient-text drop-shadow-lg">
            Powerful Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-32 flex flex-col justify-center items-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              isReversed={index % 2 !== 0} // Alternates: 0=false, 1=true, 2=false, 3=true
            />
          ))}
        </div>
      </div>

      {/* Competition Section */}
      <div className="py-20 bg-white/2 text-center relative mt-32">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-5 relative z-10">
          <div className="inline-block bg-white/10 border-2 border-white/20 rounded-full px-8 py-4 mb-8 font-semibold text-lg shadow-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            🏆 19th IEEE Student Day Competition Entry
          </div>
          <h2 className="text-5xl font-black mb-8 gradient-text drop-shadow-lg">
            Innovation in Accessibility
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge assistive technology combining computer vision, natural
            language processing, and intuitive design for meaningful impact in
            the visually impaired community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
