import React from "react";

function About(){
    return(
       <>
       <div className="flex flex-row items-center justify-center gap-[1rem] rounded-bl-[20rem] w-[100%] h-auto bg-[#20232a] p-[4rem] font-sans inset-shadow-sm inshadow-gray-900">
            <img className="w-[30rem] h-auto select-none" src="image/about.png" alt="aboutImage" />
            <div className="flex flex-col w-auto h-auto font-sans">
                <h1 className="text-[1.6rem] select-none leading-none text-[#fc6c2f] font-bold">Know</h1>
                <h1 className="text-[3rem] text-[#eee2ca] font-bold select-none">About Me</h1>
                <div className="w-[3rem] h-[0.35rem] bg-[#fc6c2f] rounded-[5rem] select-none"></div>
                <p>wertyuio</p>
                <div>
                    <button>s</button>
                    <button>sa</button>
                </div>
            </div>
        </div>
       </>
    );
}

export default About;