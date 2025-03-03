import React from 'react'

function Contact() {
  return (
    <>
      <div className="flex font-sans flex-row max-lg:flex-col-reverse px-[8rem] max-lg:gap-[] py-[3rem] bg-[#20232a] w-[100%] h-auto rounded-tr-[24rem] items-center justify-between">
        <div className="w-[50%] h-auto flex flex-col gap-[2rem] items-start justify-start">
         <div className="flex flex-col items-start justify-start gap-0">
            <h1 className='aboutH1 text-[#fc6c2f] leading-none font-bold text-[1.5rem] select-none'>Inquiry</h1>
            <h1 className="aboutH2 text-[3rem] select-none font-bold text-[#eee2ca]">Contact Me</h1>
            <div className="aboutUnder w-[4rem] select-none h-[0.35rem] rounded-full bg-[#fc6c2f]"></div>
         </div>
         <div className="flex flex-col gap-[0.35rem] w-[80%]">
          <h2 className='text-[#eee2ca] select-none'>Enter your Email</h2>
          <input className="px-[1rem] py-[0.5rem] font-bold text-[1rem] text-[#0f1219] rounded-full" placeholder="Email here..." type="email" />
         </div>
         <div className="flex flex-col gap-[0.35rem] w-[80%]">
          <h2 className='text-[#eee2ca] select-none'>Enter your Message</h2>
          <textarea rows="5" className="px-[1rem] py-[0.5rem] font-bold text-[1rem] text-[#0f1219] rounded-xl" placeholder="Message here..." type="text" />
         </div>
         <button className="bg-[#fc6c2f] py-[0.35rem] select-none font-bold text-[1.2rem] w-[80%] rounded-full text-[#0f1219]">Send</button>
        </div>
        <div className="w-[50%] h-auto">
          <img src="image/about.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Contact;
