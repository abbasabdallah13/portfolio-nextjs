import { navlinks } from '@/data/Navlinks'
import React from 'react'
import { FaWindowClose } from 'react-icons/fa'

type Props = {
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileSidebar: React.FC<Props> = ({ setShowSidebar }) => {
  return (
    <div className={`fixed lg:hidden top-0 right-0 w-3/5 sm:w-2/5 h-screen z-[900] bg-[#92611e] p-4 shadow-lg`}>
    <FaWindowClose className="text-5xl text-[#ffbd59]" onClick={()=>setShowSidebar(false)} />
    <ul>
    {
      navlinks.map((link, i) => (
        <li key={i} className="mt-10 list-none" onClick={() => setShowSidebar(false)}>
          <a href={"#"+link} className="capitalize no-underline text-white text-2xl">{link}</a>
        </li>
      ))
    }
    </ul>
  </div>
  )
}

export default MobileSidebar