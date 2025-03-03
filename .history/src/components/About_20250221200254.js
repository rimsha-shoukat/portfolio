import React from "react";

function About(){
    return(
       <>
       <div className="flex flex-row items-center justify-center gap-[1rem] rounded-bl-[20rem] w-[100%] h-auto bg-[#20232a] p-[4rem] font-sans">
            <img className="w-[30rem] h-auto" src="image/about.png" alt="aboutImage" />
            <div className="flex flex-col gap-[1rem] w-auto h-auto">
                <h1>Know</h1>
                <h1>About Me</h1>
                <div className="w-[4]"></div>
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