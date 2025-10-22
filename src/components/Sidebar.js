<<<<<<< HEAD
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
=======
import React from 'react';

const Sidebar = ({ closeMenu }) => {
  return (
    <div className="fixed inset-0 z-40 flex">
      <div className="bg-[#aad4bd] w-2/3 md:w-1/4 p-10 flex flex-col gap-6 text-white font-bold text-3xl tracking-widest">
        <button onClick={closeMenu} className="text-black text-4xl absolute top-6 right-6">×</button>
        <a href="#home" onClick={closeMenu} className="text-[#14213d]">HOME</a>
        <a href="#about" onClick={closeMenu}>ABOUT</a>
        <a href="#education" onClick={closeMenu}>EDUCATION</a>
        <a href="#experience" onClick={closeMenu}>EXPERIENCE</a>
        <a href="#certifications" onClick={closeMenu}>CERTIFICATIONS</a>
        <a href="#projects" onClick={closeMenu}>PROJECTS</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
      </div>
      <div className="flex-1 bg-black opacity-30" onClick={closeMenu}></div>
>>>>>>> 66bba063566b280d70534965895e2c9beb262fe4
    </div>
  );
};

export default Sidebar;
