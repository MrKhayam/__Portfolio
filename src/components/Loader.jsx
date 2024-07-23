import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Loader = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".myName h1", {
      y: 40,
      duration: 0.8,
      delay: 0.4,
      stagger: 0.2,
      opacity: 0,
    });

    tl.to(".loader",{
        top: "-100%",
        duration:.6,
        delay:.4,
        ease:"power1.in"
    })
  });

  return (
    <>
      <div className="w-full z-50 md:z-50 loader bg-black h-full fixed top-0 flex justify-center items-center">
        <div
          className="text-white myName loader-text flex text-4xl md:text-6xl py-4 overflow-hidden font-bold
"
        >
          <h1>K</h1>
          <h1>H</h1>
          <h1>A</h1>
          <h1>Y</h1>
          <h1>A</h1>
          <h1>M.</h1>
        </div>
      </div>
    </>
  );
};

export default Loader;
