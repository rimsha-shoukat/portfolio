import React from 'react'

function Contact() {
  return (
    <>
      <div className="flex font-sans flex-row gap-[2rm] px-[6rem] py-[3rem] bg-[#20232a] w-[100%] h-auto rounded-tr-[24rem] items-center justify-center">
        <div className="w-[60%] h-auto flex flex-col gap-[2rem] items-start justify-start">
         <div className="flex flex-col items-start justify-start gap-0">
            <h1 className='text-[#fc6c2f] leading-none font-bold text-[1.5rem] select-none'>Inquiry</h1>
            <h1 className="text-[3rem] select-none font-bold text-[#eee2ca]">Contact Me</h1>
            <div className="w-[4rem] select-none h-[0.35rem] rounded-full bg-[#fc6c2f]"></div>
         </div>
         <div className="flex flex-col gap-0">
          <h2></h2>
          <input type="text" />
         </div>
         <div>
         <h2></h2>
         <input type="text" />
         </div>
        </div>
        <div className="w-auto h-auto"></div>
      </div>
    </>
  )
}

export default Contact;
