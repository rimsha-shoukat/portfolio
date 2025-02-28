import React from 'react'

function Contact() {
  return (
    <>
      <div className="flex font-sans flex-row max-lg:flex-col-reverse max-sm:px-[2rem] px-[8rem] max-lg:gap-[4rem] py-[3.5rem] bg-[#20232a] w-[100%] h-auto rounded-tr-[24rem] items-center justify-center">
        <div className="w-[50%] max-lg:w-[100%] max-md:px-0 px-[5rem] h-auto flex flex-col gap-[2rem] items-start justify-start">
         <div className="flex flex-col items-start justify-start gap-0">
            <h1 className='aboutH1 text-[#fc6c2f] leading-none font-bold text-[1.5rem] select-none'>Inquiry</h1>
            <h1 className="aboutH2 max-xs:text-[2.5rem] text-[3rem] select-none font-bold text-[#eee2ca]">Contact Me</h1>
            <div className="aboutUnder w-[4rem] select-none h-[0.35rem] rounded-full bg-[#fc6c2f]"></div>
         </div>
         <div className="flex flex-col w-[100%] gap-[0.35rem]">
          <h2 className='text-[#eee2ca] select-none'>Enter your Email</h2>
          <input className="px-[1rem] py-[0.5rem] font-bold text-[1rem] text-[#0f1219] rounded-full" placeholder="Email here..." type="email" />
         </div>
         <div className="flex flex-col gap-[0.35rem] w-[100%]">
          <h2 className='text-[#eee2ca] select-none'>Enter your Message</h2>
          <textarea rows="5" className="px-[1rem] py-[0.5rem] font-bold text-[1rem] text-[#0f1219] rounded-xl" placeholder="Message here..." type="text" />
         </div>
         <button className="bg-[#fc6c2f] w-[100%] py-[0.35rem] select-none font-bold text-[1.2rem] rounded-full text-[#0f1219]">Send</button>
        </div>
        <div className="w-[50%] max-lg:w-[100%] h-auto">
          <img src="image/contact.i" alt="" />
        </div>
      </div>
    </>
  )
}

export default Contact;
