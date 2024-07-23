import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Hero from "../components/Hero";
import Full from "../components/Full";
import { IoIosCloseCircle } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ToggleButton from "react-toggle-button";


const Home = () => {
  const [myTimeLine, setMyTimeLine] = useState();
  const [isToggled, setIsToggled] = useState(false);

  const darkMode = document.querySelector('html');

  if(isToggled){
    darkMode.classList.remove('light');
    darkMode.classList.add('dark');
  }else{
    darkMode.classList.remove('dark');
    darkMode.classList.add('light');
    
  }

  useGSAP(() => {
    const tl1 = gsap.timeline();
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

  const { contextSafe } = useGSAP();

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
        <Navbar navbarFunction={handleNavClick} isToggled={isToggled} setIsToggled={setIsToggled} />

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
        <Hero />
      </div>
    </>
  );
};

export default Home;
