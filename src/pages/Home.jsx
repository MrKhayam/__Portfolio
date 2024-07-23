import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import Hero from '../components/Hero'
import Full from '../components/Full'
import { IoIosCloseCircle } from "react-icons/io";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Home = () => {
  const [myTimeLine, setMyTimeLine] = useState();

  useGSAP(()=>{
    const tl1 = gsap.timeline();
    tl1.to(".full",{
      right: 0,
      duration: .5,
    });

    tl1.from(".liParent li",{
      x:30,
      opacity:0,
      duration:.4,
      stagger:.1,
    });

    tl1.from(".myCross",{
      opacity:0,
      duration:.3,
    })
    
    tl1.pause();
    setMyTimeLine(tl1);
  })

  const {contextSafe} = useGSAP();

  const handleNavClick = contextSafe(()=>{
    myTimeLine.play();
  });

  const handleCross = contextSafe(()=>{
    myTimeLine.reverse();
  })
  
  
  
  
  
  return (
    <>
      <div className="home w-full h-screen relative md:pt-12 pt-8 overflow-x-hidden dark:bg-black bg-[#dadada]">
        <Loader />
        <Navbar navbarFunction={handleNavClick} />


        <div className="w-full full h-full right-[-100%] md:hidden absolute top-0 bg-black z-40">
          <IoIosCloseCircle
          onClick={handleCross}
            className="text-white myCross absolute top-[5%] right-[5%]"
            size={30}
          />

          <ul className="liParent mt-10 w-full py-20 h-[80%] p-5 flex flex-col gap-6">
            <li className="text-white text-2xl border-b py-2 border-white">
              Home
            </li>
            <li className="text-white text-2xl border-b py-2 border-white">
              About
            </li>
            <li className="text-white text-2xl border-b py-2 border-white">
              Skills
            </li>
            <li className="text-white text-2xl border-b py-2 border-white">
              Projects
            </li>
            <li className="text-white text-2xl border-b py-2 border-white">
              Contact
            </li>
          </ul>
        </div>
        <Hero />
      </div>
    </>
  );
}

export default Home
