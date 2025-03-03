import React from 'react'

function Projects() {
  return (
    <>
      <div className="w-[100%] h-auto flex flex-col gap-[1rem] items-center justify-center py-[2rem] px-[6rem]">
        <div className="flex flex-col items-start justify-start w-[100%]">
        <h1 className="aboutH1 max-[599px]:text-[1rem] text-[1.6rem] select-none leading-none text-[#fc6c2f] font-bold">My</h1>
        <h1 className="aboutH2 max-[599px]:text-[2.6rem] max-[360px]:text-[2rem] text-[3.2rem] text-[#eee2ca] font-bold select-none">Projects</h1>
        <div className="aboutUnder w-[4rem] h-[0.30rem] bg-[#fc6c2f] rounded-[5rem] select-none"></div>
        </div>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h2>Name</h2>
                <button>link</button>
                <button>git</button>
            </div>
            <div>
                <button>tailwind</button>
                <button>react</button>
            </div>
        </div>
        <div></div>
        <div></div>
      </div> 
    </>
  )
}

export default Projects;
