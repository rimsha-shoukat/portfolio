import React from 'react';

function Header(){
    return(
      <>
        <div className="h-screen bg-cover bg-no-repeat bg-header">
          <div className='w-[100%] h-[100%] bg-cover bg-[#171a21]/90'>
            <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
              <div className="w-[100%] h-[20%] border-2 border-red-800">
                <div className="flex flex-row item, w-auto h-auto border-2 bg-transparent border-[#171a21] rounded-full p-[2rem]">
                  <div className="h-[4rem] w-[4rem] bg-red-800"></div>
                  <div className="h-[4rem] w-[4rem] bg-red-800"></div>
                  <div className="h-[4rem] w-[4rem] bg-red-800"></div>
                  <div className="h-[4rem] w-[4rem] bg-red-800"></div>
                  <div className="h-[4rem] w-[4rem] bg-red-800"></div>
                  <div className="h-[4rem] w-[4rem] bg-red-800"></div>
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