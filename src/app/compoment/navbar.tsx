// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//   return (
//     <header className="sticky top-0 z-50 bg-black text-white body-font shadow-md">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//           <span className="ml-7 hover:text-yellow-300 text-2xl font-bold">Portfolio</span>
//         </a>
//         <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//           <Link href="#hero" className="mr-8 hover:text-yellow-300 font-extrabold text-xl">Home</Link>
//           <Link href="#about" className="mr-8 hover:text-yellow-300 font-extrabold text-xl">About</Link>
//           <Link href="#skills" className="mr-8 hover:text-yellow-300 font-extrabold text-xl">Skills</Link>
//           <Link href="#projects" className="mr-8 hover:text-yellow-300 font-extrabold text-xl">Projects</Link>
//           <Link href="#contact" className="mr-8 hover:text-yellow-300 font-extrabold text-xl">Contact</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-black text-white body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-7 hover:text-yellow-300 text-2xl font-bold">Portfolio</span>
        </a>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <IoIosClose className="text-white text-3xl" />
            ) : (
              <IoIosMenu className="text-white text-3xl" />
            )}
          </button>
        </div>

        {/* Navbar Links (Desktop and Mobile) */}
        <div
          className={`md:flex ${isOpen ? 'block' : 'hidden'} bg-black text-white p-4 space-y-4 md:space-y-0 md:flex-row md:space-x-8`}
        >
          <Link href="#hero" className="block text-lg font-extrabold hover:text-yellow-300 transition duration-300">
            Home
          </Link>
          <Link href="#about" className="block text-lg font-extrabold hover:text-yellow-300 transition duration-300">
            About
          </Link>
          <Link href="#skills" className="block text-lg font-extrabold hover:text-yellow-300 transition duration-300">
            Skills
          </Link>
          <Link href="#projects" className="block text-lg font-extrabold hover:text-yellow-300 transition duration-300">
            Projects
          </Link>
          <Link href="#contact" className="block text-lg font-extrabold hover:text-yellow-300 transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
