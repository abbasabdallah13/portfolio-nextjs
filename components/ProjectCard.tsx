"use client"

import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import siteLink from '@/public/images/siteLink.png';
import gitIcon from '@/public/images/githubIcon.png'
import Image from "next/image";
import {motion} from 'framer-motion'
import { urlFor } from '@/utils/client';


type Props = {
    work: [any],
    visibleItems: number
}


const ProjectCard: React.FC<Props> = ({ work, visibleItems }) => {
    
    const [scrollAnimation, setScrollAnimation] = useState<boolean>(false);
    const [cardId, setCardId] = useState<number>(-1);
    
    function LearnMore(cardId: number) {
        setScrollAnimation(true);
        setCardId(cardId);
    }

    function Back() {
        setScrollAnimation(false);
        setCardId(-1);
    }
    
    return (
        <>
            {
                work?.slice(0, visibleItems).map((el, i) => (
                    <div className='relative bg-neutral-200 overflow-hidden w-[300px] flex flex-col justify-between p-2 h-[370px] min-[440px]:h-[360px] lg:h-[380px] xl:h-[420px] min-[1780px]:h-[450px] min-[1970px]:h-[490px]'>
                        <motion.div 
                            className='absolute top-0 left-0 h-full w-full flex justify-center items-center p-0 m-0'
                            animate={{ y: (scrollAnimation && cardId == i) ? "-98%" : 0 }}
                            transition={{ duration:0.5 }}
                            style={{ objectFit: 'cover'}}
                            >
                            <Image className='absolute top-[-2px] left-0 h-[375px] min-[440px]:h-[360px] lg:h-[385px] xl:h-[425px] min-[1780px]:h-[450px] min-[1970px]:h-[490px] w-full z-10' style={{ display: 'block', objectFit: 'cover'}} src={urlFor(el.imgurl).url()} alt='project image' width={300} height={300} />
                            {
                                cardId !== i && (
                                    <button className='absolute bottom-4 right-4 bg-neutral-200 hover:bg-neutral-300 text-zinc-700 px-2 py-[3px] z-20' onClick={() => LearnMore(i)}>Learn more</button>
                                )
                            }
                            <div className='w-4/5 h-1/3 lg:h-1/4 bg-neutral-300 opacity-70 p-2 flex justify-center items-center z-20'>
                                <h1 className='text-2xl lg:text-3xl font-catchy-mager'>{el.title}</h1>
                            </div>
                        </motion.div>
                        <p className="text-[10px] xl:text-[11px] min-[2500px]:text-xs leading-2 mt-10">{el.description}</p>
                        <h1 className="font-bold text-[10px] lg:text-[11px]">Tech Stack</h1>
                        {( el?.frontend && el?.frontend?.length > 0) &&  (
                            <p  className="text-[10px] lg:text-[11px]"><span className="underline">Frontend:</span> {el?.frontend?.join(', ')}</p>
                        )}
                        {( el?.backend && el?.backend?.length > 0) && (
                            <p className="text-[10px] lg:text-[11px]"><span className="underline">Backend:</span> {el?.backend?.join(', ')}</p>
                        )}
                        {( el?.database && el?.database?.length > 0) && (
                            <p className="text-[10px] lg:text-[11px]"><span className="underline">Database:</span> {el?.database?.join(', ')}</p>
                        )}
                        {el?.deployment && (
                            <p className="text-[10px] lg:text-[11px]"><span className="underline">Deployment:</span> {el?.deployment}</p>
                        )}
                        <h1 className="font-bold text-[10px] lg:text-[11px]">Features</h1>
                        <ul className="text-[10px] lg:text-[11px] list-disc ml-4">
                            {
                            el?.features?.map((feature: string) => (
                                <li  className="text-[10px]">{feature}</li>
                            ))
                            }
                        </ul>
                        <div className="flex flex-col gap-y-2">
                            <div className="flex justify-center text-[9px]">
                                <a href={el.siteLink} target="_blank" className="flex items-center px-2 py-[2px] gap-x-2 ml-2 rounded-md bg-gray-300 hover:bg-gray-400"> 
                                    <Image src={siteLink} className="w-5 h-5" alt="www" width={10} height={10} />
                                    <span>Visit site</span>
                                </a>
                                <a href={el.giturl} target="_blank" className="flex items-center gap-x-2 px-2 py-[2px] ml-2 rounded-md bg-gray-300 hover:bg-gray-400">
                                    <Image src={gitIcon} className="w-5 h-5" alt="github icon" width={10} height={10} />
                                    <span>Check codebase</span>
                                </a>
                            </div>
                            <div className="w-full flex justify-center pb-[2px]">
                                <motion.button
                                    whileHover={{scale: 1.2}}
                                    className="cursor-pointer bg-[#EAEAEA] flex justify-center items-center border-0 rounded-[50%] p-[.2rem] mt-2 text-xl sm:text-3xl lg:text-2xl"
                                    onClick={Back}
                                >
                                    <BiArrowBack />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                            ))
                        }
        </>
  )
}

export default ProjectCard