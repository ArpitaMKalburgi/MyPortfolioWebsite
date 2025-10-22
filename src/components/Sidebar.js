// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = ({ closeMenu }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'conferences', label: 'Conferences' },
    { id: 'certifications', label: 'Certifications' },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-60 bg-[#0f2940] text-white flex flex-col items-start justify-center space-y-6 px-6 shadow-2xl z-50">
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
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
