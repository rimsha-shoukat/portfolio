import React from 'react'

function Contact() {
  return (
    <>
      <div className="flex flex-row gap-[2rem] px-[6rem] py-[2rem] bg-[#20232a] w-[100%] h-auto rounded-tr-[24rem] items-center justify-center">
        <div className="w-auto h-auto flex flex-row gap-[1rem] items-center justify-start">
            <h1 className='text-[#fc8b2f] text-[1.]'>Inquiry</h1>
            <h1>Contact Me</h1>
            <div className="w-[4rem] h-[0.25rem] rounded-full bg-[#fc8b2f]"></div>
        </div>
        <div className="w-auto h-auto"></div>
      </div>
    </>
  )
}

export default Contact;
