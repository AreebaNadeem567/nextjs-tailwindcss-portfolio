import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font" style={{ background: 'white' }}>
        <div className="container px-5 py-8 mx-auto flex flex-col items-center">
          <p className="text-sm text-gray-500 mt-4 text-center">
            © 2024 Areeba Nadeem | All Rights Reserved
          </p>

          <div className="flex mt-4">
            <Link 
              href="https://github.com/AreebaNadeem567?tab=repositories"
              className="mx-3 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} className="text-black" />
            </Link>

            <Link 
              href="https://www.linkedin.com/feed/"
              className="mx-3 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} className="text-blue-600" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
