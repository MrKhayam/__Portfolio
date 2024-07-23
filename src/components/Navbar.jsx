import React from "react";
import { RiMoonClearLine } from "react-icons/ri";
import { FaGripLines } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Full from "./Full";



const Navbar = ({navbarFunction}) => {




  
  
  
  
  
  
  return (
    <>
      <div className="md:w-[85%] w-[95%] overflow-x-hidden  bg-[#ffffff59] md:z-30 z-30 fixed left-[2.5%] md:left-[7%] backdrop:blur-lg shadow-md rounded-md mx-auto h-auto py-4 md:py-5 px-8 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-black text-xl font-semibold">Khayam.</h1>
        </div>
        <div className="right md:flex md:items-center md:gap-10">
          <ul className="md:flex md:items-center sm:hidden hidden gap-6">
            <li className="text-lg cursor-pointer hover:text-black text-gray-400 transition-all duration-200">
              Home
            </li>
            <li className="text-lg cursor-pointer hover:text-black text-gray-400 transition-all duration-200">
              About
            </li>
            <li className="text-lg cursor-pointer hover:text-black text-gray-400 transition-all duration-200">
              Skills
            </li>
            <li className="text-lg cursor-pointer hover:text-black text-gray-400 transition-all duration-200">
              Projects
            </li>
            <li className="text-lg cursor-pointer hover:text-black text-gray-400 transition-all duration-200">
              Contact
            </li>
          </ul>
          <RiMoonClearLine
            className="hidden md:block"
            color="#4ea8de"
            cursor="pointer"
          />
          <FaGripLines onClick={navbarFunction} className="md:hidden" size={25} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
