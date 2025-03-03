import React from "react";

function About(){
    return(
       <>
       <div className="flex flex-row items-center justify-center gap-[1rem] rounded-bl-[20rem] w-[100%] h-auto bg-[#20232a] p-[4rem] font-sans">
            <img className="w-[30rem] h-auto select-none" src="image/about.png" alt="aboutImage" />
            <div className="flex flex-col w-auto h-auto font-sans m-[4rem]">
                <h1 className="text-[1.6rem] select-none leading-none text-[#fc6c2f] font-bold">Know</h1>
                <h1 className="text-[3rem] text-[#eee2ca] font-bold select-none">About Me</h1>
                <div className="w-[3rem] h-[0.35rem] bg-[#fc6c2f] rounded-[5rem] select-none"></div>
                <p className="text-[0.75rem] text-justify text-[#eee2ca]">I’m a passionate front-end developer dedicated to crafting intuitive, responsive, and visually engaging web experiences. With expertise in HTML, CSS, TailwindCSS, JavaScript, and modern frameworks like React, I thrive on turning design concepts into functional, user-friendly interfaces. I prioritize clean code, accessibility, and performance optimization while collaborating closely with designers and back-end teams. Continuously learning and adapting to emerging technologies, I aim to build digital solutions that leave a lasting impact.</p>
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