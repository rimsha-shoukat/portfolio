import React from 'react';

function Header(){
    return(
      <>
        <div className="h-screen bg-cover bg-no-repeat bg-header">
          <div className='w-[100%] h-[100%] bg-cover bg-[#171a21]/90'>
            <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
              <div className="w-[100%] h-[20%] flex items-center justify-center">
                <div className="flex flex-row gap-[1rem] items-center justify-center w-auto h-auto border-2 bg-transparent border-[#171a21] rounded-full px-[1rem] py-[0.5rem]">
                  <div className="h-[2rem] w-[2rem]  bg-red-800 border-r-2"></div>
                  <div className="h-[2rem] w-[2rem] rounded-full bg-red-800"></div>
                  <div className="h-[2rem] w-[2rem] rounded-full bg-red-800"></div>
                  <div className="h-[2rem] w-[2rem] rounded-full bg-red-800"></div>
                  <div className="h-[2rem] w-[2rem] rounded-full bg-red-800"></div>
                  <div className="h-[2rem] w-[2rem] rounded-full bg-red-800"></div>
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