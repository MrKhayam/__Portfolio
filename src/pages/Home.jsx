import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { IoIosCloseCircle } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ToggleButton from "react-toggle-button";
import { SiSimpleanalytics } from "react-icons/si";

const Home = () => {
  const [myTimeLine, setMyTimeLine] = useState();
  const [isToggled, setIsToggled] = useState(false);

  const darkMode = document.querySelector("html");

  if (isToggled) {
    darkMode.classList.remove("light");
    darkMode.classList.add("dark");
  } else {
    darkMode.classList.remove("dark");
    darkMode.classList.add("light");
  }
  const { contextSafe } = useGSAP();
  const tl1 = gsap.timeline();

  useGSAP(() => {
    tl1.to(".full", {
      right: 0,
      duration: 0.5,
      borderRadius: 0,
    });

    tl1.from(".liParent li", {
      x: 30,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
    });

    tl1.from(".myCross", {
      opacity: 0,
      duration: 0.3,
    });

    tl1.pause();
    setMyTimeLine(tl1);
  });

  const handleNavClick = contextSafe(() => {
    myTimeLine.play();
  });

  const handleCross = contextSafe(() => {
    myTimeLine.reverse();
  });















  
  
  
  
  
  
  
  
  return (
    <>
      <div className="home w-full h-screen relative md:pt-10 transition-all duration-500 pt-5 overflow-x-hidden dark:bg-black bg-[#dadada]">
        <Loader />
        <Navbar
          navbarFunction={handleNavClick}
          mytimeline={contextSafe}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
        />

        <div className="w-[100vw] md:w-[100vw] full h-full right-[-100%] md:hidden absolute dark:bg-black top-0 bg-white z-40">
          <IoIosCloseCircle
            onClick={handleCross}
            className="text-black dark:text-white myCross absolute top-[5%] right-[5%]"
            size={30}
          />

          <ul className="liParent mt-10 w-full py-20 h-[80%] p-5 flex flex-col gap-6">
            <li className="text-black dark:text-white text-2xl border-b py-2 border-black dark:border-white">
              Home
            </li>
            <li className="text-black dark:text-white text-2xl border-b py-2 border-black dark:border-white">
              About
            </li>
            <li className="text-black dark:text-white text-2xl border-b py-2 border-black dark:border-white">
              Skills
            </li>
            <li className="text-black dark:text-white text-2xl border-b py-2 border-black dark:border-white">
              Projects
            </li>
            <li className="text-black dark:text-white text-2xl border-b py-2 border-black dark:border-white">
              Contact
            </li>
            <li className="text-black items-center dark:text-white flex justify-between text-2xl border-b py-2 border-black dark:border-white">
              <h1>Dark Mode</h1>
              <div className="toggle-btn">
                <ToggleButton
                  value={isToggled}
                  onToggle={() => {
                    setIsToggled((prev) => !prev);
                  }}
                />
              </div>
            </li>
          </ul>
        </div>

        {/* Hero Section Starts Here */}

        <div className="w-full h-[100vh] flex items-center justify-center mt-20 md:mt-0">
          <div className="innerHero md:w-[80%] md:h-[70%] h-full md:flex-row flex flex-col-reverse w-[95%] md:items-center">
            <div className="left md:w-[60%] md:flex md:justify-center md:flex-col w-[100%] h-full">
              <h1 className="md:text-7xl md:font-bold md:my-4 text-3xl md:text-left font-bold text-center my-2">Khayam Ijaz</h1>
              <p className="md:text-lg text-center text-sm md:text-left">
                👋 Hi there! I'm Khayam, a passionate and innovative Frontend
                Web Developer from the scenic landscapes of Azad Kashmir. I
                specialize in transforming ideas into stunning, interactive
                digital experiences with a perfect blend of design finesse and
                technical expertise. Whether it's a sleek portfolio, a dynamic
                web application, or a captivating e-commerce site, I bring
                visions to life on the web. Explore my work and see how
                creativity meets code to craft something extraordinary. Ready to
                turn your ideas into reality? Let's make the web a more
                beautiful place together!
              </p>
              <div className="btns md:my-4 my-3 flex md:justify-start justify-center items-center gap-2">
                  <button className="bg-black text-white px-4 py-5 rounded-lg">Download Resume</button>
                  <button className="px-8 py-[18px] rounded-lg border-2 border-black">Contact</button>
              </div>
            </div>
            <div className="right md:w-[40%] p-2 md:h-full h-[60%] w-[100%] flex items-center justify-center">
                  <div className="image md:w-[80%] md:h-[80%] w-[80%] h-[100%] "></div>

            </div>
          </div>
        </div>

        {/* Hero Section Ends Here */}
      </div>
    </>
  );
};

export default Home;
