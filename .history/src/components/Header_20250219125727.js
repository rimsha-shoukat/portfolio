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
                  <FaInstagram className="text-[#eee2ca] text-2xl mx-[0.5rem]" />

                  </div>
                  <div className="h-auto w-auto place-content-center border-l-2 border-[#0f1219]">
                  <BsMoonStarsFill className="text-[#eee2ca] text-2xl mx-[0.5rem]" />

                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[80%] border-2 border-red-800"></div>
            </div>
          </div>

        </div>
      </>
    );
}

export default Header;