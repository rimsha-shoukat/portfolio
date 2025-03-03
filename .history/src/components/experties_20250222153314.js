import React from 'react'

function Experties() {
  return (
    <>
    <div className="flex flex-col items-center justify-center px-[7rem] py-[7rem] gap-[1rem] w-[100%] h-auto">
      <div className="flex flex-col gap-0 text-sans items-start justify-start w-[100%] h-auto">
        <h1 className="text-[1.75rem] leading-none text-[#fc6c2f] font-bold select-none">Area of</h1>
        <h1 className="text-[3.5rem] leading-snug text-[#eee2ca] font-bold select-none">Experties</h1>
        <div className="h-[0.30rem] w-[4rem] bg-[#fc6c2f] border-none rounded-[5rem] select-none"></div>
      </div>
      <div className="flex flex-row gap-[1rem] items-center justify-center w-[100%] h-auto p-[2rem]">
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col justify-start items-start">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="text-[#fc6c2f] text-">HTML5</h2>
                    <h2>90%</h2>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            <div></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Experties;
