import Image from "next/image";
import pic from "@/public/images/amsterdam.jpg"
import { useEffect, useRef, useState } from "react";


const Header = () => {
  const [bottom, setBottom] = useState<number>(0)
  const headerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const scrollHeaderText = () => {
      const viewportTop = scrollY
      const viewportHeight = window.innerHeight + scrollY
      let headerSectionHeight = document.getElementById("home")?.offsetHeight
      if(headerRef.current) {
        if(headerSectionHeight && viewportHeight < headerSectionHeight)
          if(window.innerWidth >= 1024) headerRef.current.style.top = `${viewportTop}px`
      }
    }

    console.log(window.innerWidth)
      window.addEventListener("scroll", scrollHeaderText)
  }, [])
  
  
  return (
    <div id="home" className="relative">
      <Image className="w-screen" src={pic} alt="In front of the Magna Plaza" />
      <div ref={headerRef} className="absolute w-full top-0 left-0 h-full lg:h-screen flex flex-col justify-start lg:justify-center items-center text-white pb-2 sm:pb-0 mt-4 sm:mt-16 lg:mt-0">
        <p className="text-lg min-[400px]:text-xl md:text-3xl lg:text-2xl 2xl:text-4xl font-heebo">WELCOME TO</p>
        <p className="text-4xl min-[400px]:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] 2xl:text-[180px] font-catchy-mager">Abbas Abdallah's</p>
        <p className="text-3xl min-[400px]:text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl font-catchy-mager">Portfolio</p>
      </div>
    </div>
  );
};

export default Header;
