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
    </div>
  );
};

export default Sidebar;
