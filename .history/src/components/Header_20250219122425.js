import React from 'react';

function Header(){
    return(
      <>
        <div className="h-screen bg-cover bg-no-repeat bg-header">
          <div className='w-[100%] h-[100%] bg-cover bg-[#171a21]/90'>
            <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
              <div className="w-[100%] h-[20%] flex items-center justify-center">
                <div className="flex flex-row gap-[1rem] items-center justify-center w-auto h-auto px-[1rem] py-[0.5rem] border-2 bg-[#20232a] border-[#0f1219] rounded-full shadow-md shadow-[#0f1219]/50">
                  <div className="h-[2rem] w-[2rem] border-r-2 border-[#b7b7b7]">
                    <i>
                      d
                    </i>
                  </div>
                  <div className="h-[2rem] w-[2rem]"></div>
                  <div className="h-[2rem] w-[2rem]"></div>
                  <div className="h-[2rem] w-[2rem]"></div>
                  <div className="h-[2rem] w-[2rem]"></div>
                  <div className="h-[2rem] w-[2rem] border-l-2 border-[#0f1219]"></div>
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