import React from "react";
import { HashLink as Link } from "react-router-hash-link"; 

function About(){
    return(
       <>
       <div className="flex flex-row max-lg:flex-col items-center justify-center gap-[0.5rem] rounded-bl-[24rem] w-[100%] h-auto bg-[#20232a] max-lg:px-[5rem] max-sm:px-[2rem] px-[2rem] py-[4rem] font-sans">
            <img className="aboutImg w-auto h-auto select-none" src="image/about.png" alt="aboutImage" />
            <div className="flex w-[50%] max-lg:w-[100%] flex-col h-auto font-sans max-sm:mx-[1rem] mx-[5rem] my-[3rem]">
                <h1 className="aboutH1 text-[1.6rem] select-none leading-none text-[#fc6c2f] font-bold">Know</h1>
                <h1 className="aboutH2 text-[3.2rem] max-sm:text-[2.8rem] text-[#eee2ca] font-bold select-none">About Me</h1>
                <div className="aboutUnder w-[4rem] h-[0.30rem] bg-[#fc6c2f] rounded-[5rem] select-none"></div>
                <p className="aboutPara1 text-[0.9rem] select-none text-justify leading-snug text-[#eee2ca] my-[2rem]">Aspiring Front-End Developer and university student in my 6th semester, skilled in JavaScript, React.js, Tailwind CSS, HTML, and CSS. I am passionate about building responsive and user-friendly web applications. Proficient in Git for version control and effective in collaborative environments. Eager to contribute my skills and creativity to a dynamic organization while advancing my knowledge in web development.</p>
                <div className="flex flex-row gap-[1rem] max-md:flex-col">
                 <Link to="#contact">
                    <button className="aboutBtn1 transition-all duration-700 hover:shadow-md hover:shadow-[#fc6c2f] border-2 rounded-full px-[1rem] py-[0.5rem] border-[#eee2ca] text-[#fc6c2f] font-bold select-none ">Contact Me</button>
                 </Link>
                 <Link rel="stylesheet" target="_blank" src="image/resume.png">
                    <button className="aboutBtn2 transition-all duration-700 hover:shadow-md hover:shadow-[#eee2ca] border-2 rounded-full px-[1rem] py-[0.5rem] text-[#20232a] border-[#fc6c2f] bg-[#fc6c2f] font-bold select-none">View Resume</button>
                 </Link>
                </div>
            </div>
        </div>
       </>
    );
}

export default About;