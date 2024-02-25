import React from "react";

const About = () => {

  return (
    <div id="about" className="bg-chocolate flex flex-col lg:flex-row justify-around lg:justify-center items-center h-fit sm:h-screen py-4">
        <div className="lg:w-1/3 flex justify-center text-white">
            <p className="text-2xl sm:text-4xl text-center lg:text-5xl font-heebo">about me</p>
        </div>
        <div className="w-4/5 lg:w-2/3 flex flex-col justify-center items-center">
            <p className="w-4/5 lg:w-2/3 text-sm sm:text-xl lg:text-base min-[2500px]:text-4xl text-justify text-white font-heebo max-lg:mt-8">
                Hello there, I am Abbas. A full stack developer from Lebanon. With over two years of experience in front-end and back-end development, I create websites that are well-designed and built with efficient practices.
                I have been a freelancer for almost a year. Right now, I am working on personal projects to keep up with novice technologies out there.
                If interested in discussing anything, feel free to drop me a message anytime using the chat feature. I'm here round the clock. 
                Or check other contact methods. Thank you for stopping by, I hope you have a fantastic time. 
            </p>
            <a href="#work" className="bg-[#ffdb59] py-2 px-4 sm:py-4 lg:py-2 text-[#623e2a] mt-16 sm:mt-8 border-0 text-base sm:text-xl lg:text-base lg:font-bold font-heebo mt-10 cursor-pointer hover:bg-[#FFE79E] hover:text-[#A67A62]">
                SEE WHAT I'VE DONE
            </a>
        </div>
    </div>
  )
};

export default About;
