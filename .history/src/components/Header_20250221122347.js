import React from 'react';
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
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
                <div className="flex flex-row gap-[1rem] items-center justify-center w-auto h-auto px-[0.5rem] py-[0.5rem] border-2 bg-[#20232a] border-[#0f1219] rounded-full shadow-md shadow-[#0f1219]/50">
                  <div className="w-auto h-auto border-r-2 border-[#0f1219] place-content-center">
                  <CgMail className="text-[#eee2ca] text-3xl mx-[0.5rem] cursor-pointer" />
                  </div>
                  <div className="h-auto w-auto place-content-center">
                  < FaGithub className="text-[#eee2ca] text-2xl mx-[0.5rem] cursor-pointer" />
                  </div>
                  <div className="h-auto w-auto place-content-center">
                  <FaLinkedin className="text-[#eee2ca] text-2xl mx-[0.5rem] cursor-pointer" />
                  </div>
                  <div className="h-auto w-auto place-content-center">
                  <FaInstagram className="text-[#eee2ca] text-2xl mx-[0.5rem] cursor-pointer" />
                  </div>
                  <div className="h-auto w-auto place-content-center border-l-2 border-[#0f1219]">
                  <BsMoonStarsFill className="text-[#eee2ca] text-2xl mx-[0.5rem] cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-[100%] h-[80%]">
                <div className="flex flex-col text-[#eee2ca] items-center justify-center h-auto w-[70%]">
                  <h1 className="text-[4.5rem] max-[970px]:text-[4rem] max-[758px]:text-[3rem] max-[570px]:text-[2.5rem] max-[480px]:text-[1.5rem] max-[336px]:text-[1rem] text-nowrap cursor-default font-bold leading-none select-none">Hello, I am <b className="text-[#fc6c2f]"> Rimsha </b> </h1>
                  <h1 className="text-[4.5rem] max-[970px]:text-[4rem] max-[758px]:text-[3rem] max-[570px]:text-[2.5rem] max-[480px]:text-[1.5rem] max-[336px]:text-[1rem] text-nowrap cursor-default font-bold select-none">A Frontend Developer.</h1>
                  <p className="cursor-default text-center text-[1rem] max-[570px]:text-[0.75rem] max-[480px]:text-[0.5rem] max-[336px]:text-[0.3rem] place-content-center w-[94%] select-none">I craft sleek, responsive websites that seamlessly integrate intuitive design with advanced functionality, prioritizing user end experience and business objectives.</p>
                  <button className="border-none rounded-full hover:sh shadow-md shadow-[#fc8b2f] bg-[#fc6c2f] text-[1rem] text-[#171a21] px-[1.2rem] py-[0.5rem] font-bold w-auto mt-[1.5rem] group select-none">My Work <FaArrowRight className="inline pl-[0.2rem] text-[1.4rem] transition-transform duration-700 group-hover:rotate-90" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header;