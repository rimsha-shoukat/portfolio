import React from 'react';

function Header(){
    return(
      <>
        <div className="h-screen bg-cover bg-no-repeat bg-header">
          <div className='w-[100%] h-[100%] bg-cover bg-[#2b2f38]/90'>
            <div className="flex flex-col items-center justify-center w-[100%] h-scr">
              <div className="w-100% h-50% border-2 border-red-800"></div>
              <div className="w-100% h-50% border-2 border-red-800"></div>
            </div>
          </div>

        </div>
      </>
    );
}

export default Header;