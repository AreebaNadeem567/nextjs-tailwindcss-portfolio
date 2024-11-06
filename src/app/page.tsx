// 'use client'


// import Hero from "./compoment/hero";
// import About from "./compoment/about";
// import Skills from "./compoment/skills";
// import Projects from "./compoment/projects ";
// import Contact from "./compoment/contact";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";


// export default function Home() {
//   useEffect (() => {
//     AOS.init({
//       easing: "ease-out-back",
//       duration: 1200,
//       delay: 100,
//       mirror: true,
//       anchorPlacement: "bottom-bottom",
//       offset: 160,
//     });
//     AOS.refresh()
//   }, []);

//   return (
//     <main>
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//     </main>
// );
// }

"use client"

import Hero from "./compoment/hero";
import About from "./compoment/about";
import Skills from "./compoment/skills";
import Projects from "./compoment/projects ";
import Contact from "./compoment/contact";


export default function Home() {


  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
);
}