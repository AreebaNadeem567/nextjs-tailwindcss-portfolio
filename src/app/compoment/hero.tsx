import React from "react";
import Navbar from "./navbar";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";


const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex justify-center items-center min-h-screen">
        <div className="container grid lg:grid-cols-2 h-[calc(100vh-70px)]">
          {/* Text Section */}
          <div className="flex flex-col justify-center p-6 space-y-4">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
              <p>Hello, I&apos;m</p>
              <span className="text-yellow-300">Areeba Nadeem</span>
              <Typewriter
                options={{
                  strings: ["Web Developer", "Digital Entrepreneur"],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <p className="mb-6 leading-relaxed text-base">
              I&apos;m a passionate developer specializing in web development
              with a focus on creating dynamic and responsive applications. I
              love bringing ideas to life with code. Let&apos;s connect and
              build something amazing together!
            </p>
            <Link href="#contact">
              <button className="bg-yellow-300 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out">
                Let&apos;s Contact
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center p-6">
            <Image
              src="/image.jpg"
              alt="Hero"
              width={192}
              height={200}
              className="shadow-2xl transition-transform duration-500 hover:scale-105 rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
