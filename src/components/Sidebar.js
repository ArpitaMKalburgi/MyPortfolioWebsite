import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open by default on desktop (md and above)
  useEffect(() => {
    const handleInit = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      }
    };
    handleInit();
    // Close on ESC on mobile
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "hackathons", label: "Hackathons" },
    { id: "conferences", label: "Conferences" },
    { id: "certifications", label: "Certifications" },
  ];

  return (
    <>
      {/* 📱 Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#0f2940] text-white flex justify-between items-center p-4 z-50 shadow-md">
        <h1 className="text-lg font-semibold tracking-wide">Arpita Kalburgi</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>
      </div>

      {/* 🖥 Sidebar (Desktop + Mobile Drawer) */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#0f2940] text-white flex flex-col items-start justify-center space-y-6 px-6 shadow-2xl z-40 transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} w-64 md:w-60 lg:w-72`}
      >
        {/* Desktop close button inside sidebar */}
        <button
          className="hidden md:flex absolute top-4 right-4 text-white/80 hover:text-white"
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>

        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            duration={600}
            spy={true}
            offset={-60}
            activeClass="text-yellow-400 font-bold"
            className="cursor-pointer text-lg hover:text-yellow-300 transition-colors"
            onClick={() => setIsOpen(false)} // closes menu when clicked
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* 🟢 Overlay (click outside to close menu on mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Desktop reopen button when sidebar is closed */}
      {!isOpen && (
        <button
          className="hidden md:flex fixed top-4 left-4 z-50 bg-[#0f2940] text-white p-2 rounded shadow"
          onClick={() => setIsOpen(true)}
          aria-label="Open sidebar"
        >
          <HiMenuAlt3 className="text-xl" />
        </button>
      )}
    </>
  );
};

export default Sidebar;
