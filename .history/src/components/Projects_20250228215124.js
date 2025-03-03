import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { AiOutlineHtml5 } from "react-icons/ai";

function Projects() {
  return (
    <>
    <div className="mb-[2rem] w-[100%] h-auto flex flex-col gap-[5rem] items-center justify-center py-[2rem] max-sm:px-[2rem] px-[6rem]">
        <div className="flex flex-col items-start justify-start w-[100%]">
        <h1 className="aboutH1 text-[1.6rem] select-none leading-none text-[#fc6c2f] font-bold">My</h1>
        <h1 className="aboutH2 text-[3.2rem] text-[#eee2ca] font-bold select-none">Projects</h1>
        <div className="aboutUnder w-[4rem] h-[0.30rem] bg-[#fc6c2f] rounded-[5rem] select-none"></div>
        </div>
        <div className='flex flex-row items-center justify-center max-lg:flex-col w-[100%] h-auto max-xs:gap-[1rem] max-lg:gap-[2rem] gap-[4rem] font-sans text-[#f9e8c7]'>
            <div className='select-none max-lg:w-[100%] w-[26%] rounded-xl'>
            <a href="https://rkcodex.github.io/coffeeApp/" target="_blank" rel="noopener noreferrer">
                <img className="proj select-none max-lg:block hidden w-[100%] h-[100%]" src="image/coffee.png" alt="coffeeApp" />
            </a>
            <a href="https://rkcodex.github.io/coffeeApp/" target="_blank" rel="noopener noreferrer">
                <img className="proj select-none max-lg:hidden block w-[100%] h-[100%]" src="image/coffee1.png" alt="coffeeApp" />
            </a>
            </div>
            <div className="aboutH1 flex flex-col justify-center items-start max-lg:w-[100%] w-[45%] gap-[2rem] max-xs:gap-[1rem]">
            <div className="select-none w-[100%] flex flex-row items-center justify-between">
            <h2 className="max-xs:text-[1.2rem] text-[2rem] text-[#fc6c2f] text-nowrap">Coffee App</h2>
                <div className="flex flex-row gap-[0.65rem]">
              <a href="https://rkcodex.github.io/coffeeApp/" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-[#eee2ca] rounded-xl py-[0.65rem] px-[0.65rem] hover:shadow-md hover:shadow-[#fc6c2f] group">
                   < FaLocationArrow className="text-[#eee2ca] max-xs:text-[0.65rem] text-[1.3rem] cursor-pointer select-none group-hover:text-[#fc6c2f]" /> 
                </button>
              </a>
              <a href="https://github.com/rkCodeX/coffeeApp.git" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-[#eee2ca] rounded-xl py-[0.65rem] px-[0.65rem] hover:shadow-md hover:shadow-[#fc6c2f] group">
                   < FaGithub className="text-[#eee2ca] max-xs:text-[0.65rem] text-[1.3rem] cursor-pointer select-none group-hover:text-[#fc6c2f]" /> 
                </button>
              </a>
                </div>
            </div>
            <p className='select-none max-xs:text-[0.65rem] text-[1rem] text-justify'>Explore the Coffee App, a visual showcase that captures the essence of a coffee shop. Discover an array of coffee options in a beautifully designed interface!</p>
            <div className="flex max-xs:flex-col max-xs:gap-[1rem] flex-row w-[100%] max-xs:text-[0.5rem] gap-[1.5rem] text-[0.85rem]">
             <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">              
                <button className="hover:rotate-180 max-xs:w-[100%] transition-all duration-700 shadow-md shadow-[#fc6c2f] hover:shadow-none select-none border-2 border-[#eee2ca] rounded-[5rem] px-[1rem] max-xs:py-[0.1rem] py-[0.2rem] place-content-center"><RiTailwindCssFill className="inline max-xs:text-[1.5rem] text-[2rem] pr-[0.65rem] text-[#fc6c2f]" />Tailwind CSS</button>
             </a>
             <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <button className="hover:rotate-180 max-xs:w-[100%] transition-all duration-700 shadow-md shadow-[#fc6c2f] hover:shadow-none select-none border-2 border-[#eee2ca] rounded-[5rem] px-[1rem] max-xs:py-[0.1rem] py-[0.2rem] place-content-center"><FaReact className="inline text-[2rem] max-xs:text-[1.5rem] pr-[0.65rem] text-[#fc6c2f]" />React Js</button>
             </a>
            </div>
            </div>
        </div>
        <div className='flex flex-row-reverse items-center justify-center max-lg:flex-col w-[100%] h-auto max-xs:gap-[1rem] max-lg:gap-[2rem] gap-[4rem] font-sans text-[#f9e8c7]'>
            <div className='select-none max-lg:w-[100%] w-[26%] rounded-xl'>
               <a href="https://rkcodex.github.io/demoWeb_carGallery/" target="_blank" rel="noopener noreferrer"> 
               <img className="proj select-none max-lg:block hidden w-[100%] h-[100%]" src="image/car.png" alt="coffeeApp" />
               </a>
               <a href="https://rkcodex.github.io/demoWeb_carGallery/" target="_blank" rel="noopener noreferrer"> 
                <img className="proj select-none max-lg:hidden block w-[100%] h-[100%]" src="image/car1.png" alt="coffeeApp" />
               </a>
            </div>
            <div className="aboutH1 flex flex-col justify-center items-start max-lg:w-[100%] w-[45%] gap-[2rem] max-xs:gap-[1rem]">
            <div className="select-none w-[100%] flex flex-row items-center justify-between">
            <h2 className="max-xs:text-[1.2rem] text-[2rem] text-[#fc6c2f] text-nowrap">Car Gallery</h2>
                <div className="flex flex-row gap-[0.65rem]">
                <a href="https://rkcodex.github.io/demoWeb_carGallery/" target="_blank" rel="noopener noreferrer"> 
                  <button className="border-2 border-[#eee2ca] rounded-xl py-[0.65rem] px-[0.65rem] hover:shadow-md hover:shadow-[#fc6c2f] group">
                    < FaLocationArrow className="text-[#eee2ca] max-xs:text-[0.65rem] text-[1.3rem] cursor-pointer select-none group-hover:text-[#fc6c2f]" /> 
                  </button>
                </a>
                <a href="https://github.com/rkCodeX/demoWeb_carGallery.git" target="_blank" rel="noopener noreferrer"> 
                 <button className="border-2 border-[#eee2ca] rounded-xl py-[0.65rem] px-[0.65rem] hover:shadow-md hover:shadow-[#fc6c2f] group">
                   < FaGithub className="text-[#eee2ca] max-xs:text-[0.65rem] text-[1.3rem] cursor-pointer select-none group-hover:text-[#fc6c2f]" /> 
                 </button>
                </a>
                </div>
            </div>
            <p className='select-none max-xs:text-[0.65rem] text-[1rem] text-justify'>Carlax is a visually stunning car gallery website showcasing a curated collection of cars with demo prices and descriptions. Built with Tailwind CSS and JavaScript, it features user authentication, allowing visitors to sign up, log in, and favorite their favorite cars—all for demo purposes.</p>
            <div className="flex max-xs:flex-col flex-row w-[100%] max-xs:gap-[1rem] gap-[1.5rem] max-xs:text-[0.5rem] text-[0.85rem]">
             <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">              
                <button className="hover:rotate-180 max-xs:w-[100%] transition-all duration-700 shadow-md shadow-[#fc6c2f] hover:shadow-none select-none border-2 border-[#eee2ca] rounded-[5rem] px-[1rem] max-xs:py-[0.1px] py-[0.2rem] place-content-center"><RiTailwindCssFill className="inline max-xs:text-[1.5rem] text-[2rem] pr-[0.65rem] text-[#fc6c2f]" />Tailwind CSS</button>
             </a>
             <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">
                <button className="hover:rotate-180  transition-all duration-700 shadow-md shadow-[#fc6c2f] hover:shadow-none select-none border-2 border-[#eee2ca] rounded-[5rem] px-[1rem] max-xs:py-[0.1px] py-[0.2rem] place-content-center"><FaNodeJs className="inline max-xs:text-[1.5rem] text-[2rem] pr-[0.65rem] text-[#fc6c2f]" />JavaScript</button>
             </a>
            </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center max-lg:flex-col w-[100%] h-auto max-xs:gap-[1rem] max-lg:gap-[2rem] gap-[4rem] font-sans text-[#f9e8c7]'>
            <div className='select-none max-lg:w-[100%] w-[26%] rounded-xl'>
             <a href="https://rkcodex.github.io/demoWeb/Tailwind/web/web.html" target="_blank" rel="noopener noreferrer">
                <img className="proj select-none max-lg:block hidden w-[100%] h-[100%]" src="image/web.png" alt="coffeeApp" />
             </a>
             <a href="https://rkcodex.github.io/demoWeb/Tailwind/web/web.html" target="_blank" rel="noopener noreferrer">
                <img className="proj select-none max-lg:hidden block w-[100%] h-[100%]" src="image/web1.png" alt="coffeeApp" />
             </a>
            </div>
            <div className="aboutH1 flex flex-col justify-center items-start max-lg:w-[100%] w-[45%] gap-[2rem] max-xs:gap-[1rem]">
            <div className="select-none w-[100%] flex flex-row items-center justify-between">
            <h2 className="max-xs:text-[1.2rem] text-[2rem] text-[#fc6c2f] text-nowrap">Data Analysis</h2>
                <div className="flex flex-row gap-[0.65rem]">
                <a href="https://rkcodex.github.io/demoWeb/Tailwind/web/web.html" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-[#eee2ca] rounded-xl py-[0.65rem] px-[0.65rem] hover:shadow-md hover:shadow-[#fc6c2f] group">
                   < FaLocationArrow className="text-[#eee2ca] max-xs:text-[0.65rem] text-[1.3rem] cursor-pointer select-none group-hover:text-[#fc6c2f]" /> 
                </button>
                </a>
                <a href="https://github.com/rkCodeX/demoWeb/tree/main/Tailwind" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-[#eee2ca] rounded-xl py-[0.65rem] px-[0.65rem] hover:shadow-md hover:shadow-[#fc6c2f] group">
                   < FaGithub className="text-[#eee2ca] max-xs:text-[0.65rem] text-[1.3rem] cursor-pointer select-none group-hover:text-[#fc6c2f]" /> 
                </button>
                </a>
                </div>
            </div>
            <p className='select-none max-xs:text-[0.65rem] text-[1rem] text-justify'>This data analysis website is a clone of a popular online platform, designed to provide users with intuitive data visualization and insights. Utilizing modern web technologies, it allows users to explore datasets, generate reports, and gain valuable analytics in a user-friendly interface.</p>
            <div className="flex max-xs:flex-col flex-row w-[100%] gap-[1.5rem] max-xs:gap-[1rem] max-xs:text-[0.5rem] text-[0.85rem]">
              <a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">
                <button className="hover:rotate-180 transition-all shadow-md shadow-[#fc6c2f] hover:shadow-none duration-700 select-none border-2 border-[#eee2ca] max-xs:py-[0.1rem] rounded-[5rem] px-[1rem] py-[0.2rem] place-content-center"><AiOutlineHtml5 className="inline max-xs:text-[1.5rem] text-[2rem] pr-[0.65rem] text-[#fc6c2f]" />HTML5</button>
              </a>
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">              
                <button className="hover:rotate-180 transition-all shadow-md shadow-[#fc6c2f] hover:shadow-none duration-700 select-none border-2 border-[#eee2ca] max-xs:py-[0.1rem] rounded-[5rem] px-[1rem] py-[0.2rem] place-content-center"><RiTailwindCssFill className="inline max-xs:text-[1.5rem] text-[2rem] pr-[0.65rem] text-[#fc6c2f]" />Tailwind CSS</button>
              </a>
            </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Projects;
