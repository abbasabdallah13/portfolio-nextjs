"use client"

import { useState, useEffect } from "react";
import  { client } from '@/utils/client'
import ProjectCard from "./ProjectCard";
import { workCategories } from "@/data/WorkCategories";


const Work = () => {
  const [allWork, setAllWork] = useState<any>([]);
  const [skills, setSkills] = useState<any>([]);
  const [work, setWork] = useState<any>([]);
  const [currentFilter, setCurrentFilter] = useState<any>('show all');
  const [visibleItems, setVisibleItems] = useState<number>(4);
    
  useEffect(() => {
    let skillsQuery, workQuery;
      workQuery = `*[_type=="work"]`;
      client.fetch(workQuery).then((data)=>{setAllWork(data); setWork(data)});
      skillsQuery = `*[_type=="skills"]`;
      client.fetch(skillsQuery).then(data =>{ setSkills(data) });
  }, []);

  useEffect(() => {
    if(currentFilter === 'show all'){
      setWork(allWork)
    }else{
      let filteredWork = allWork.filter((el: any) => el.skillsUsed.filter((skill: any) => skill._ref === currentFilter._id).length > 0 && el)
      setWork(filteredWork);
    }
  }, [currentFilter, allWork]);
  

    return (
    <div id='work' className="h-fit bg-mustard p-4">
        <h3 className="uppercase text-[22px] font-semibold text-center w-full lg:text-4xl text-gray-100">selected work</h3>
        <p className="text-gray-100 text-sm lowercase font-medium mt-12 md:text-base ml-12 ">Filter by skill, framework, or library:</p>
        <div className="flex flex-col items-center mt-2">
          <div className="w-[90%] md:w-[75%] flex flex-wrap gap-[3px] xl:gap-2">
            <button 
                className={`text-lg lg:text-base border-solid border-[#92611e] border-[1px] ${currentFilter === 'show all' ? 'bg-chocolate text-white' : 'bg-[#EAEAEA] hover:bg-[#9C9B9B] hover:text-white'} px-2 xl:text-lg`}
                onClick={()=>setCurrentFilter('show all')}
            >
              show all
            </button>
            {
              skills.filter((el: any) => workCategories.includes(el.title) && el).map((el: any, i:number) => (
                  <button 
                    className={`text-lg lg:text-base border-solid border-[#92611e] border-[1px] ${currentFilter === el ? 'bg-chocolate text-white' : 'bg-[#EAEAEA] hover:bg-chocolate hover:text-white'} px-2`}
                    onClick={()=>setCurrentFilter(el)}
                    key={i} 
                    >
                  {el.title}
                  </button>
                ))
            }
          </div>
        </div>
        <p className="text-gray-100 lowercase font-medium text-lg lg:ml-24 mt-8 md:text-base">showing {work.length} projects</p>
        <div className="w-full flex justify-center mt-2 mb-2">
            <div className={`flex justify-center pb-4 h-fit flex-wrap w-[80%] xs:w-[90%] gap-y-8 xs:gap-x-[4%] lg:gap-x-[2.65%]`}>
                <ProjectCard visibleItems={visibleItems} work={work} />          
            </div>
        </div>
        {
          visibleItems === 0 ? '' : (
            <div className="flex justify-center my-6">
              <button 
                className="w-fit px-4 text-xl font-medium lg:text-xl bg-white text-[#27283D] border-[#27283D] hover:text-white hover:bg-[#27283D]"
                onClick={()=> setVisibleItems(prev =>  prev >= work.length ? prev - 4 : prev + 4)}
              >
                {visibleItems>=work.length?'Load Less':'Load More..'}
              </button>
            </div>
          )
        } 
    </div>
  )
};

export default Work;
