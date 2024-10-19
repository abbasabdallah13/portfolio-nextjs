"use client"

import React, { SetStateAction, useEffect, useState } from "react";

import { IoHomeSharp } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";

import { navlinks } from "@/data/Navlinks";

type Props = {
    showSidebar: boolean,
    setShowSidebar: React.Dispatch<SetStateAction<boolean>>
}

const Navbar: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [navKey, setNavKey] = useState(0)
  const [chocolateMenuColor, setChocolateMenuColor] = useState('chocolate')

  useEffect(() => {
    // to display animation for navbar on large screens
    const handleScroll = () => {
      const scrollY = window.scrollY
      if(scrollY > 200){
        setShowNavbar(true)
        setNavKey(prev => prev + 1)
      }else{
        setShowNavbar(false)
      }
    }

    // to change the color of the chocolate menu on mobiles and tablets
    const handleMenuContrast = () => {
      let aboutSectionBoundingRect = document?.getElementById("about")?.getBoundingClientRect()
      if(aboutSectionBoundingRect && aboutSectionBoundingRect.top <= 21 && aboutSectionBoundingRect.top >= -380){
        setChocolateMenuColor("yellow")
      }else{
        setChocolateMenuColor("chocolate")
      }
    }

    document.addEventListener("scroll", handleScroll)
    document.addEventListener("scroll", handleMenuContrast)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleMenuContrast)
    }

  }, [])
 
  

  return (
    // navlinks on large screens
    <div className="relative">
      <div className={`max-[1023px]:hidden top-0 z-[1000] p-4 navbar ${showNavbar ? 'fixed' : 'hidden'}`}>
        <ul className="flex items-center font-heebo">
        <li className="inline text-3xl 2xl:text-5xl"><a className="text-[#623e2a] hover:text-[#ffbd59]" href="#home"><IoHomeSharp /></a></li>
          <ul className={`hover:no-animation navlinks-animation`} key={navKey}>
          {
            navlinks.map((link: string, i: number) => (
              <li key={i} className="navlink uppercase text-[#e4dfd8] hover:text-[#AFACA7] cursor-pointer inline ml-4 min-[2200px]:ml-8">
              <a className="text-[#e4dfd8] hover:text-[#AFACA7] cursor-pointer no-underline text-lg 2xl:text-2xl min-[2200px]:text-3xl font-coco-gothic" href={"#"+link}>
                {link}
              </a>
              </li>
            ))
          }
          </ul>
        </ul>
      </div>

      {/* mobile chocolate menu */}
      <div 
        className={`top-6 right-6 lg:hidden text-5xl z-[1000]  ${chocolateMenuColor === "chocolate" ? "text-[#92611e]" : "text-[#ffbd59]"} ${showNavbar ? "fixed" : "hidden"}`}
        onClick={() => setShowSidebar(prev => !prev)}
      >
        <CgMenuGridR />
      </div>
    </div>
  );
};

export default Navbar;
