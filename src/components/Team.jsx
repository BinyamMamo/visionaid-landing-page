import { useState, useEffect } from "react";
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("team-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const developers = [
    {
      id: 1,
      name: "Binyam Mamo",
      avatar: (
        <img
          src="/assets/images/binyam.png"
          className="w-full h-full object-cover"
          alt="Binyam Mamo"
        />
      ),
      social: {
        twitter: "#",
        github: "https://github.com/BinyamMamo",
        linkedin: "https://www.linkedin.com/in/binyammamo",
        email: "binyammamo01@gmail.com",
      },
    },
    {
      id: 2,
      name: "Dagim Medhanit",
      avatar: (
        <img
          src="/assets/images/dagim.jpg"
          className="w-full h-full object-cover"
          alt="Dagim Medhanit"
        />
      ),
      social: {
        twitter: "#",
        github: "https://github.com/dagimed",
        linkedin: "#",
        email: "dagimedhanit@gmail.com",
      },
    },
    {
      id: 3,
      name: "Michael Dessie",
      avatar: (
        <img
          src="/assets/images/michael.jpg"
          className="w-full h-full object-cover"
          alt="Michael Dessie"
        />
      ),
      social: {
        twitter: "#",
        github: "https://github.com/samueldereje96",
        linkedin: "#",
        email: "michael@visionaid.com",
      },
    },
    {
      id: 4,
      name: "Samuel Dereje",
      avatar: (
        <img
          src="/assets/images/samuel.jpg"
          className="w-full h-full object-cover"
          alt="Michael Dessie"
        />
      ),
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#",
        email: "samuel@visionaid.com",
      },
    },
  ];

  const supervisors = [
    {
      id: 1,
      name: "Dr. Nour Osama Abdallah Aburaed",
      avatar: (
        <img
          src="/assets/images/dr_nour.png"
          className="w-full h-full object-cover"
          alt="Michael Dessie"
        />
      ),
      social: {
        linkedin: "https://www.linkedin.com/in/nour-aburaed",
        email: "noaburaed@ud.ac.ae",
      },
    },
    {
      id: 2,
      name: "Dr. Eman Salamah Abu Shabab",
      avatar: (
        <img
          src="/assets/images/dr_eman.png"
          className="w-full h-full object-cover"
          alt="Michael Dessie"
        />
      ),
      social: {
        linkedin: "https://www.linkedin.com/in/eman-salamah-80aa3119b",
        email: "eshabab@ud.ac.ae",
      },
    },
  ];

  const TeamCard = ({ member, index, delay = 0 }) => (
    <div
      className={`bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 text-center group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay + index * 100}ms` }}
    >
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white/10 rounded-full mx-auto flex items-center justify-center text-2xl sm:text-3xl shadow-md overflow-hidden group-hover:scale-105 transition-transform duration-300">
          {typeof member.avatar === "string" ? (
            <span>{member.avatar}</span>
          ) : (
            member.avatar
          )}
        </div>
      </div>

      {/* Name */}
      <h4 className="text-base sm:text-lg font-semibold mb-3 text-white group-hover:text-gray-200 transition-colors duration-300">
        {member.name}
      </h4>

      {/* Social Links */}
      <div className="flex justify-center gap-2">
        {member.social.twitter && (
          <a
            href={member.social.twitter}
            className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 text-xs"
          >
            <FiTwitter className="w-3.5 h-3.5" />
          </a>
        )}
        {member.social.github && (
          <a
            href={member.social.github}
            className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 text-xs"
          >
            <FiGithub className="w-3.5 h-3.5" />
          </a>
        )}
        {member.social.linkedin && (
          <a
            href={member.social.linkedin}
            className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 text-xs"
          >
            <FiLinkedin className="w-3.5 h-3.5" />
          </a>
        )}
        {member.social.email && (
          <a
            href={`mailto:${member.social.email}`}
            className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors duration-200 text-xs"
          >
            <FiMail className="w-3.5 h-3.5" />
          </a>
        )}
        {member.social.instagram && (
          <a
            href={member.social.instagram}
            className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 text-xs"
          >
            <FiInstagram className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="team" className="py-16 sm:py-20">
      <div id="team-section" className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 gradient-text">
            Meet Our Team
          </h2>
          <div className="w-20 h-0.5 bg-white/30 mx-auto mb-3"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            The team behind VisionAid's accessibility innovation
          </p>
        </div>

        {/* Developers Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-white">
            Development Team
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {developers.map((developer, index) => (
              <TeamCard
                key={developer.id}
                member={developer}
                index={index}
                delay={0}
              />
            ))}
          </div>
        </div>

        {/* Supervisors Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-white">
            Academic Supervisors
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto">
            {supervisors.map((supervisor, index) => (
              <TeamCard
                key={supervisor.id}
                member={supervisor}
                index={index}
                delay={200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
