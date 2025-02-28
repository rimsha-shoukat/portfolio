import React from 'react'

function Contact() {
  return (
    <>
      <div className="flex font-sans flex-row px-[8rem] py-[3rem] bg-[#20232a] w-[100%] h-auto rounded-tr-[24rem] items-center justify-between">
        <div className="w-[50%] h-auto flex flex-col gap-[2rem] items-start justify-start">
         <div className="flex flex-col items-start justify-start gap-0">
            <h1 className='text-[#fc6c2f] leading-none font-bold text-[1.5rem] select-none'>Inquiry</h1>
            <h1 className="text-[3rem] select-none font-bold text-[#eee2ca]">Contact Me</h1>
            <div className="w-[4rem] select-none h-[0.35rem] rounded-full bg-[#fc6c2f]"></div>
         </div>
         <div className="flex flex-col gap-0 w-[100%]">
          <h2 className='text-[#eee2ca]'>Enter your Email</h2>
          <input className="px-[0.5rem]" type="email" />
         </div>
         <div className="flex flex-col gap-0 w-[100%]">
         <h2 className="text-[#eee2ca]">Enter your message</h2>
         <input type="text" />
         </div>
         <button className="bg-[#fc6c2f] rounded-full text-[#0f1219]">Send</button>
        </div>
        <div className="w-[40%] h-auto"></div>
      </div>
    </>
  )
}

export default Contact;
