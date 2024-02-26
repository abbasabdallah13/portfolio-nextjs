import { navlinks } from "@/data/Navlinks";
import React, { useEffect } from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => { 
  return (
    <div className="bg-[e4dfd8] my-4">
      <div>
        <div className="flex flex-col items-center gap-y-2 lg:flex-row justify-between">
          <ul className="p-0">
          {
            navlinks.map(link => (
              <li className="inline ml-2">
                <a href={"/#"+link} className="text-[#623e2a] hover:underline">{link}</a>
              </li>
            ))
          }
          </ul>
          <SocialIcons mr={4} />
        </div>
        <p className="text-center text-[#623e2a] mt-2">2024 - All rights reserved</p>
      </div>

    </div>
  )
};

export default Footer;
