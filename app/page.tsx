"use client"

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import MobileSidebar from "@/components/MobileSidebar";
import SocialIcons from "@/components/SocialIcons";
import Header from "@/components/Header";
import About from "@/components/About";
import Work from "@/components/Work";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [socialIcons, setSocialIcons] = useState<boolean>(false)
 
  useEffect(() => {
    const displaySocialIcons = () => {
      const scrollY = window.scrollY
      if(scrollY >= 200){
        setSocialIcons(true)
      }else{
        setSocialIcons(false)
      }
    }

    document.addEventListener("scroll", displaySocialIcons)
  }, [])

  return (
    <main>
          {
            showSidebar && (
              <MobileSidebar setShowSidebar={setShowSidebar} />
            )
          }
          <div className={`duration-75 ${showSidebar ? "translate-x-[-60%] sm:translate-x-[-40%]" : ""}`}>
            <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <Header />
            <About />
            <Work />
            {
              socialIcons && (
                <SocialIcons styles={"fixed left-0 top-[40%] flex-col bg-[#e2dfd4]/50 p-2"} />
              )
            }
          </div>
    </main>
  );
}
