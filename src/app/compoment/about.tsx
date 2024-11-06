import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1000 });
    }
  }, []);

  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-black min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-10 md:py-24">

          {/* About Box 1: Introduction */}
          <div 
            className="lg:w-2/3 w-full mb-8 md:mb-10 p-6 bg-white shadow-lg rounded-lg"
            data-aos="fade-up"
          >
            <div className="flex flex-col items-center">
              <h1 className="title-font text-3xl md:text-4xl mb-4 font-medium text-gray-900 text-center">
                About Me
              </h1>
              <p className="mb-6 md:mb-8 leading-relaxed text-lg text-center">
                Hi, I&apos;m Areeba Nadeem, a passionate web developer from Karachi, currently studying BS Economics at Karachi University. 
                I specialize in HTML, CSS, TypeScript, and Next.js, building responsive and engaging websites.
                My focus is on mastering Next.js to deliver high-quality solutions. 
              </p>
              <Link href="#projects">
                <button className="inline-flex text-black bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded-full text-lg">
                  Projects
                </button> 
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;