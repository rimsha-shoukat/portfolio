import React from 'react';

function Header(){
    return(
      <>
        <div className="h-screen bg-cover bg-no-repeat bg-header">
          <div className='w-[100%] h-[100%] bg-cover bg-[#171a21]/90'>
            <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
              <div className="w-[100%] h-[20%] flex items-center justify-center">
                <div className="flex flex-row gap-[1rem] items-center justify-center w-auto h-auto border-2 bg-[#20232a] border-[#0f1219] rounded-full insetshadow-2xs inset-shadow-red-500/50">
                  <div className="h-[2.5rem] w-[2.5rem] border-r-2 border-[#0f1219]">
                    <h1>

                    </h1>
                  </div>
                  <div className="h-[2.5rem] w-[2.5rem]"></div>
                  <div className="h-[2.5rem] w-[2.5rem]"></div>
                  <div className="h-[2.5rem] w-[2.5rem]"></div>
                  <div className="h-[2.5rem] w-[2.5rem]"></div>
                  <div className="h-[2.5rem] w-[2.5rem] border-l-2 border-[#171a21]"></div>
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