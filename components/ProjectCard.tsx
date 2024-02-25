"use client"

import { useState, useEffect } from "react";
import {motion} from 'framer-motion'
import {BiArrowBack} from 'react-icons/bi'
import { client, urlFor } from "@/utils/client";
import siteLink from '@/public/images/siteLink.png';
import gitIcon from '@/public/images/githubIcon.png'
import Image from "next/image";
import FlipCardSVG from "./FlipCardSVG";


type Props = {
    work: [any],
    visibleItems: number
}

const ProjectCard: React.FC<Props> = ({ work, visibleItems }) => {
    const [flipCard, setFlipCard] = useState<boolean>(false);
    const [cardId, setCardId] = useState<string>('');
    const [currentSkills, setCurrentSkills] = useState<any>([]);
    const [skills, setSkills] = useState<any>([]);    
    const [showFlipCardArrow, setShowFlipCardArrow] = useState<string>("")
  
    useEffect(() => {
      let varArr: any[] = [];
      currentSkills?.map((el: any) => varArr.push(el?._ref));
      client.fetch(`*[_type=='skills' && _id in $ids]`,{ids: varArr}).then((data)=> setSkills(data));
    }, [currentSkills]);    
   
    const flipCardFunc = (card: any) => {
      setFlipCard(true);
      setCardId(card.title);
      setCurrentSkills(card.skillsUsed)
    }

  return (
    <>
  {
    work?.slice(0, visibleItems).map((el,i) =>  (
      <motion.div 
        className='relative work-card w-full max-w-[280px] h-fit min-h-[300px] min-[440px]:h-[360px] lg:h-[380px] xl:h-[420px] min-[1780px]:h-[450px] min-[1970px]:h-[490px] card-responsiveness border-0 z-[0]' 
        whileHover={{rotateZ: [0,5,-5]}}
        transition={{ duration: 0.7}}
        key={i}
        onMouseOver={() => setShowFlipCardArrow(el.title)}
        onMouseOut={() => setShowFlipCardArrow("")}
>
        <div 
          className='frontWorkCard shadow-cardShadowTopRight p-0 w-full flex flex-col items-center justify-between h-[300px] min-[440px]:h-[360px] lg:h-[380px] xl:h-[420px] min-[1780px]:h-[450px] min-[1970px]:h-[490px]' style={{transform:!flipCard?'rotateY(0deg)':cardId===el.title?'rotateY(180deg)':'rotateY(0deg)'}}
          onClick={() => flipCardFunc(el)}  
        >
              <div className="absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.5)] z-10"></div>
              <Image className="max-w-full w-full h-full" src={urlFor(el.imgurl).url()} width={280} height={300} alt={el.title} />
              {/* will work only on hover on large devices */}
              {
                showFlipCardArrow === el.title && !flipCard && (
                  <div className="absolute bottom-2 right-2 z-20">
                    <FlipCardSVG />
                  </div>
                )
              }
              {/* to be always visible on small devices */}
              <div className="lg:hidden absolute bottom-2 right-2 z-20">
                    <FlipCardSVG />
              </div>
        </div>

        <div className='backWorkCard w-full flex flex-col justify-between p-2 min-h-[300px] min-[440px]:h-[360px] lg:h-[380px] xl:h-[420px] min-[1780px]:h-[450px] min-[1970px]:h-[490px]' style={{opacity:!flipCard ? '0' : cardId === el.title ? '1' : '0', transform: !flipCard ? 'rotateY(-180deg)': cardId===el.title ? 'rotateY(0deg)' : 'rotateY(-180deg)', zIndex: !flipCard ? '-1' : cardId === el.title ? '1' : '-1'}}>
            <p className="text-[10px] lg:text-[12px] font-bold text-center">{el.title}</p>
            <p className="text-[10px] lg:text-[12px] font-semibold">Description:</p>
            <p className="text-[10px] xl:text-[12px] min-[2500px]:text-xs leading-2">{el.description}</p>
            <div className="flex flex-col gap-y-2">
              <p className="text-[10px] lg:text-[9px] font-semibold mb-2"><span className="underline">Skills used:</span> {skills.map((el: any) => el.title).join(", ")}</p>
              <div className="flex text-[9px]">
                <Image src={siteLink} className="w-4 h-4" alt="www" width={10} height={10} />
                <a href={el.siteLink} target="_blank" className="underline ml-2">visit website</a>
                <a className="hover:underline hidden lg:block" href={el.siteLink}>:&nbsp;{el.siteLink}</a>
              </div>
              <div className="flex text-[9px]">
                <Image src={gitIcon} className="w-4 h-4" alt="github icon" width={10} height={10} />
                <a href={el.giturl} target="_blank" className="underline ml-2">check codebase</a>
                <a className="hover:underline hidden lg:block" href={el.giturl}>:&nbsp;{el.giturl}</a>
              </div>
              <div className="w-full flex justify-center pb-[2px]">
                <motion.button
                    whileHover={{scale: 1.2}}
                    transition={{type:'spring',stiffness:200, damping: 2}} 
                    className="cursor-pointer bg-[#EAEAEA] flex justify-center items-center border-0 rounded-[50%] p-[.2rem] mt-2 text-5xl sm:text-3xl lg:text-2xl"
                    onClick={() => setFlipCard(false)}
                  >
                    <BiArrowBack />
                </motion.button>
              </div>
            </div>
        </div>

      </motion.div>
      )
    )}  
  </>
  )
};

export default ProjectCard;
