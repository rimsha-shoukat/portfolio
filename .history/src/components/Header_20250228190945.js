import React from 'react';
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

function Header(){
    return(
      <>
        <div className="h-screen bg-cover bg-no-repeat bg-header">
          <div className='w-[100%] h-[100%] bg-cover bg-[#171a21]/90'>
            <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
              <div className="w-[100%] h-[20%] flex items-center justify-center">
                <div className="navbarAnimation flex flex-row max-xs:gap-0 gap-[1rem] items-center justify-center w-auto h-auto px-[0.5rem] py-[0.5rem] border-2 bg-[#20232a] border-[#0f1219] rounded-full shadow-md shadow-[#0f1219]/50">
                  <div className="w-auto h-auto border-r-2 border-[#0f1219] place-content-center">
                   <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rimshashoukat271@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MdEmail className="text-[#eee2ca] text-3xl mx-[0.5rem] cursor-pointer" />
                   </a>
                  </div>
                  <div className="h-auto w-auto place-content-center"> 
                    <a href="https://github.com/rkCodeX" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-[#eee2ca] text-2xl mx-[0.5rem] cursor-pointer" />
                    </a> 
                  </div>
                  <div className="h-auto w-auto place-content-center">
                    <a href="https://linkedin.com/in/rimsha-shoukat-khan-353652348?utm_source=share&utm_con" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-[#eee2ca] text-2xl mx-[0.5rem] cursor-pointer" />
                    </a>
                  </div>
                  <div className="h-auto w-auto place-content-center">
                  <RiInstagramFill className="text-[#eee2ca] text-2xl mx-[0.5rem] cursor-pointer" />
                  </div>
                  <div className="h-auto w-auto place-content-center border-l-2 border-[#0f1219]">
                  <BsMoonStarsFill className="text-[#eee2ca] text-2xl mx-[0.5rem] cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-[100%] h-[80%]">
                <div className="flex flex-col text-[#eee2ca] items-center justify-center h-auto max-md:w-[100%] w-[70%]">
                  <h1 className="firstHeadingAnim max-xs:text-[1.5rem] text-[4.5rem] max-lg:text-[4rem] max-md:text-[3.5rem] max-sm:text-[2.65rem] text-nowrap cursor-default font-bold leading-none select-none">Hello, I am <b className="text-[#fc6c2f]"> Rimsha </b> </h1>
                  <h1 className="secondHeadingAnim text-[4.5rem] max-md:text-[3.5rem] max-lg:text-[4rem] max-sm:text-[2.65rem] max-xs:text-[1.5rem] text-nowrap cursor-default font-bold select-none">A Frontend Developer.</h1>
                  <p className="paraAnim opacity-0 cursor-default text-center max-xs:text-[0.5rem] text-[1rem] place-content-center max-xs:w-[98%] w-[94%] select-none">I craft sleek, responsive websites that seamlessly integrate intuitive design with advanced functionality, prioritizing user end experience and business objectives.</p>
                  <button className="btnAnim opacity-0 border-none transition-shadow duration-500 rounded-full hover:shadow-lg hover:shadow-[#fc8b2f] shadow-md shadow-[#fc8b2f] bg-[#fc6c2f] text-[1rem] text-[#171a21] px-[1.2rem] py-[0.5rem] font-bold w-auto mt-[1.5rem] group select-none">My Work <FaArrowRight className="inline pl-[0.2rem] text-[1.4rem] transition-transform duration-700 group-hover:rotate-90" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header;