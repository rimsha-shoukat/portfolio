import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Projects() {
  return (
    <>
    <div className="w-[100%] h-auto flex flex-col gap-[5rem] items-center justify-center py-[2rem] px-[2rem] sm:px-[6rem]">
        <div className="flex flex-col items-start justify-start w-[100%]">
        <h1 className="aboutH1 text-[1.6rem] select-none leading-none text-[#fc6c2f] font-bold">My</h1>
        <h1 className="aboutH2 text-[3.2rem] text-[#eee2ca] font-bold select-none">Projects</h1>
        <div className="aboutUnder w-[4rem] h-[0.30rem] bg-[#fc6c2f] rounded-[5rem] select-none"></div>
        </div>
        <div className='flex flex-col lg:w-[80%] w-[100%] h-auto gap-[1rem] xs:gap-[2rem] font-sans text-[#f9e8c7]'>
            <div className='select-none w-[100%] h-auto rounded-xl'>
                <img className="select-none w-[100%] h-[100%]" src="image/coffee.png" alt="coffeeApp" />
            </div>
            <div className="select-none flex flex-row items-center justify-between">
            <h2 className="text-[1.2rem] xs:text-[2rem] text-[#fc6c2f] text-nowrap">Coffee App</h2>
                <div className="flex flex-row gap-[0.65rem]">
                <button className="border-2 border-[#eee2ca] rounded-xl py-[0.65rem] px-[0.65rem] hover:shadow-md hover:shadow-[#fc6c2f] group">
                   < FaLocationArrow className="text-[#eee2ca] text-[0.65rem] xs:text-[1.3rem] cursor-pointer select-none group-hover:text-[#fc6c2f]" /> 
                </button>
                <button className="border-2 border-[#eee2ca] rounded-xl py-[0.65rem] px-[0.65rem] hover:shadow-md hover:shadow-[#fc6c2f] group">
                   < FaGithub className="text-[#eee2ca] text-[0.65rem] xs:text-[1.3rem] cursor-pointer select-none group-hover:text-[#fc6c2f]" /> 
                </button>
                </div>
            </div>
            <p className='select-none text-[0.65rem] xs:text-[1rem] text-justify'>Explore the Coffee App, a visual showcase that captures the essence of a coffee shop. Discover an array of coffee options in a beautifully designed interface!</p>
            <div className="flex flex-row gap-[1.5rem] text-[0.85rem]">
                <button className="hover:rotate-180 transition-all duration-700 select-none border-2 border-[#eee2ca] rounded-[5rem] px-[1rem] py-[0.2rem] place-content-center"><RiTailwindCssFill className="inline text-[2rem] pr-[0.65rem] text-[#fc6c2f]" />Tailwind CSS</button>
                <button className="hover:rotate-180 transition-all duration-700 select-none border-2 border-[#eee2ca] rounded-[5rem] px-[1rem] py-[0.2rem] place-content-center"><FaReact className="inline text-[2rem] pr-[0.65rem] text-[#fc6c2f]" />React Js</button>
            </div>
        </div>
      </div> 
    </>
  )
}

export default Projects;
