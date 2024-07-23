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
      <div className="home w-full h-screen relative md:pt-12 pt-8 overflow-x-hidden dark:bg-black bg-[#dadada]">
        <Loader />
        <Navbar navbarFunction={handleNavClick} />

        <div className="w-full full h-full right-[-100%] md:hidden absolute dark:bg-white top-0 bg-black z-40">
          <IoIosCloseCircle
            onClick={handleCross}
            className="text-white dark:text-black myCross absolute top-[5%] right-[5%]"
            size={30}
          />

          <ul className="liParent mt-10 w-full py-20 h-[80%] p-5 flex flex-col gap-6">
            <li className="text-white dark:text-black text-2xl border-b py-2 border-white dark:border-black">
              Home
            </li>
            <li className="text-white dark:text-black text-2xl border-b py-2 border-white dark:border-black">
              About
            </li>
            <li className="text-white dark:text-black text-2xl border-b py-2 border-white dark:border-black">
              Skills
            </li>
            <li className="text-white dark:text-black text-2xl border-b py-2 border-white dark:border-black">
              Projects
            </li>
            <li className="text-white dark:text-black text-2xl border-b py-2 border-white dark:border-black">
              Contact
            </li>
            <li className="text-white items-center dark:text-black flex justify-between text-2xl border-b py-2 border-white">
              <h1>Dark Mode</h1>
              <div className="toggle-btn">
                <ToggleButton
                  value={isToggled}
                  onToggle={() => {
                    setIsToggled((prev) => !prev)
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
