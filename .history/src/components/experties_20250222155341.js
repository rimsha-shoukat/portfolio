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
      <div className="flex flex-row gap-[4rem] items-center justify-center w-[100%] h-auto py-[2rem]">
        <div className="flex flex-col gap-[5rem] items-center justify-center w-[50%]">
            <div className="flex flex-col justify-start gap-[1rem] items-start w-[100%] h-auto">
                <div className="w-[100%] flex flex-row items-center justify-between">
                    <h2 className="text-[#fc6c2f] text-[1.5rem] select-none">HTML5</h2>
                    <h2 className="text-[#eee2ca] text-[1.8rem] font-bold select-none">90%</h2>
                </div>
                <div className="w-[100%] h-[0.23rem] bg-white">
                    <div></div>
                </div>
            </div>
            <div className="flex flex-col gap-[1rem] justify-start items-start w-[100%] h-auto">
                <div className="w-[100%] flex flex-row items-center justify-between">
                    <h2 className="text-[#fc6c2f] text-[1.5rem] select-none">HTML5</h2>
                    <h2 className="text-[#eee2ca] text-[1.8rem] font-bold select-none">90%</h2>
                </div>
                <div className="w-[100%] h-[0.23rem] bg-white">
                    <div></div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-[5rem] items-center justify-center w-[50%]">
            <div className="flex flex-col justify-start items-start w-[100%] h-auto gap-[1rem]">
                <div className="w-[100%] flex flex-row items-center justify-between">
                    <h2 className="text-[#fc6c2f] text-[1.5rem] select-none">HTML5</h2>
                    <h2 className="text-[#eee2ca] text-[1.8rem] font-bold select-none">90%</h2>
                </div>
                <div className="w-[100%] h-[0.23rem] bg-[#eee2ca] rounded-full">
                    <div className="h-[0.25rem] w-[90%] bg-[#fc6c2f] rounded-[3]"></div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start w-[100%] h-auto gap-[1rem]">
                <div className="w-[100%] flex flex-row items-center justify-between">
                    <h2 className="text-[#fc6c2f] text-[1.5rem] select-none">HTML5</h2>
                    <h2 className="text-[#eee2ca] text-[1.8rem] font-bold select-none">90%</h2>
                </div>
                <div className="w-[100%] h-[0.23rem] bg-white">
                    <div></div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Experties;
