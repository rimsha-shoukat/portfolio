import React from 'react';
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";


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

              <div className="flex items-center justify-center w-[100%] h-[80%] font-serif">
                <div className="flex flex-col text-[#eee2ca] items-center justify-center border-2 h-auto w-[70%]">
                  <h1 className="capitalize text-[4.5rem] cursor-default font-extrabold leading-[4rem]">Hello, I am <spam className="text-[#fc6c2f]"> Rimsha </spam> </h1>
                  <h1 className="capitalize text-[4.5rem] cursor-default font-extrabold"> a frontend developer.</h1>
                  <p className="cursor-default text-center text-lg/6 px-[2rem] place-content-center">I craft sleek, responsive websites that seamlessly integrate intuitive design with advanced functionality, prioritizing user end experience and business objectives.</p>
                  <div className="flex flex-row gap-[1.5rem]">
                  <button classNa>My work -@</button>
                  <button classNa>contact -?</button>
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
    );
}

export default Header;