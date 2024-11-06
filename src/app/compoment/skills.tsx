import React from 'react';

const Skills = () => {
  return (
    <div className="bg-black text-white min-h-screen" id="skills">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            {/* Heading with underline */}
            <h2 className="text-3xl sm:text-5xl text-white tracking-widest font-bold title-font mb-1 border-b-4 border-white inline-block pb-3">
              Skills
            </h2>
          </div>

          {/* Skills Section */}
          <div className="flex flex-wrap -m-4">
            {/* Box 1 - HTML */}
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full" data-aos="zoom-in-up">
              <div className="flex rounded-lg h-full bg-gray-800 p-12 flex-col">
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium">HTML</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-lg text-white">
                    Expertise in creating semantic, accessible, and well-structured websites using HTML.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 - CSS & Tailwind CSS */}
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full" data-aos="zoom-in-up">
              <div className="flex rounded-lg h-full bg-gray-800 p-12 flex-col">
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium">CSS & Tailwind CSS</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-lg text-white">
                    Advanced skills in styling websites with CSS and rapid UI development using Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 - TypeScript & Next.js */}
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full" data-aos="zoom-in-up">
              <div className="flex rounded-lg h-full bg-gray-800 p-12 flex-col">
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-2xl title-font font-medium">TypeScript & Next.js</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-lg text-white">
                    Proficient in building dynamic, type-safe applications with TypeScript and modern web apps using Next.js.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;