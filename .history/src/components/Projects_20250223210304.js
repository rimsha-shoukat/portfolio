import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

function Projects() {
  return (
    <>
      <div className="w-[100%] h-auto flex flex-col gap-[6rem] items-center justify-center py-[2rem] px-[6rem]">
        <div className="flex flex-col items-start justify-start w-[100%]">
        <h1 className="aboutH1 max-[599px]:text-[1rem] text-[1.6rem] select-none leading-none text-[#fc6c2f] font-bold">My</h1>
        <h1 className="aboutH2 max-[599px]:text-[2.6rem] max-[360px]:text-[2rem] text-[3.2rem] text-[#eee2ca] font-bold select-none">Projects</h1>
        <div className="aboutUnder w-[4rem] h-[0.30rem] bg-[#fc6c2f] rounded-[5rem] select-none"></div>
        </div>
        <div className='flex flex-col w-[80%] h-auto gap-[1.5rem] font-sans text-[#eee2ca]'>
            <div className='select-none w-[100%] h-[30rem] border-2 border-solid border-white rounded-xl'>
                <img className="select-none w-[100%] h-[100%]" src="image/about.png" alt="aboutImg" />
            </div>
            <div className="select-none flex flex-row gap-[1rem]">
            <h2 className="mr-[3rem] text-[2rem]">Name</h2>
                <button className="border-2 border-[#eee2ca] rounded-xl px-[0.6rem]">
                   < FaLocationArrow className="text-[#eee2ca] text-2xl cursor-pointer" /> 
                </button>
                <button className="border-2 border-[#eee2ca] rounded-xl px-[0.6rem]">
                   < FaGithub className="text-[#eee2ca] text-2xl cursor-pointer" /> 
                </button>
            </div>
            <p></p>
            <div className="flex flex-row gap-[2rem] text-[1.2rem]">
                <button className="select-none border-2 border-[] rounded-">Tailwind CSS</button>
                <button className="select-none border-2 border-[] rounded-">ReactJs</button>
            </div>
        </div>
        <div></div>
        <div></div>
      </div> 
    </>
  )
}

export default Projects;
