import React from "react";

function About(){
    return(
       <>
       <div className="flex flex-row items-center justify-center gap-[1rem] rounded-bl-[20rem] w-[100%] h-auto bg-[#20232a] p-[4rem] font-sans">
            <img className="w-[30rem] h-auto" src="image/about.png" alt="aboutImage" />
            <div className="flex flex-col w-auto h-auto font-sans">
                <h1 className="text-[1.6rem] select-n leading-none text-[#fc6c2f] font-bold">Know</h1>
                <h1 className="text-[3rem] text-[#eee2ca] font-bold">About Me</h1>
                <div className="w-[3rem] h-[0.35rem] bg-[#fc6c2f] rounded-[5rem]"></div>
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