import React from "react";

function About(){
    return(
       <>
       <div className="max-[1125px]:flex-col flex flex-row items-center justify-center gap-[1rem] rounded-bl-[20rem] w-[100%] h-auto bg-[#20232a] p-[4rem] font-sans">
            <img className="max-[599px]:w-[20rem] max-[5] w-[30rem] h-auto select-none" src="image/about.png" alt="aboutImage" />
            <div className="flex flex-col w-auto h-auto font-sans m-[5rem]">
                <h1 className="text-[1.6rem] select-none leading-none text-[#fc6c2f] font-bold">Know</h1>
                <h1 className="text-[3.2rem] text-[#eee2ca] font-bold select-none">About Me</h1>
                <div className="w-[3rem] h-[0.35rem] bg-[#fc6c2f] rounded-[5rem] select-none"></div>
                <p className="text-[1rem] select-none text-justify leading-snug text-[#eee2ca] my-[2rem]">I’m a passionate front-end developer dedicated to crafting intuitive, responsive, and visually engaging web experiences. With expertise in HTML, CSS, TailwindCSS, JavaScript, and modern frameworks like React, I thrive on turning design concepts into functional, user-friendly interfaces. I prioritize clean code, accessibility, and performance optimization while collaborating closely with designers and back-end teams. Continuously learning and adapting to emerging technologies, I aim to build digital solutions that leave a lasting impact.</p>
                <div className="flex flex-row gap-[1rem] mt-[1rem]">
                    <button className="hover:rotate-2 transition-all duration-700 hover:shadow-md hover:shadow-[#fc6c2f] border-2 rounded-full px-[1rem] py-[0.5rem] border-[#eee2ca] text-[#fc6c2f] font-bold select-none ">Contact Me</button>
                    <button className="hover:rotate-2 transition-all duration-700 hover:shadow-md hover:shadow-[#eee2ca] border-2 rounded-full px-[1rem] py-[0.5rem] text-[#20232a] border-[#fc6c2f] bg-[#fc6c2f] font-bold select-none">Download CV</button>
                </div>
            </div>
        </div>
       </>
    );
}

export default About;