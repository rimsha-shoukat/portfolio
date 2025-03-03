import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "10693bc2-74fa-459d-93c9-5f095012ff0b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Sucess!",
        text: "Merssage sent sucessfully!",
        icon: "success"
      });
      event.target.reset();
    }
  };

  return (
    <>
      <div className="flex font-sans flex-row max-lg:flex-col-reverse max-sm:px-[2rem] px-[8rem] gap-[4rem] py-[3rem] bg-[#20232a] w-[100%] h-auto rounded-tr-[24rem] items-center justify-center">
        <div className="w-[50%] max-lg:w-[100%] max-md:px-0 px-[3rem] h-auto flex flex-col gap-[2rem] items-start justify-start">
         <div className="flex flex-col items-start justify-start gap-0">
            <h1 className='aboutH1 text-[#fc6c2f] leading-none font-bold text-[1.5rem] select-none'>Inquiry</h1>
            <h1 className="w-[100%] aboutH2 text-[2.5rem] max-xs:text-[2rem] select-none font-bold text-[#eee2ca]">Contact Me</h1>
            <div className="aboutUnder w-[4rem] select-none h-[0.35rem] rounded-full bg-[#fc6c2f]"></div>
         </div>
          <form onSubmit={onSubmit} className="w-[100%] h-auto flex flex-col gap-[1.2rem]">
            <div className="aboutH2 flex flex-col w-[100%] gap-[0.35rem]">
              <label className='text-[#eee2ca] text-sm select-none'>Full Name</label>
              <input className="bg-[#0f1219] px-[1rem] py-[0.65rem] text-sm text-[#eee2ca] rounded-full" placeholder="Enter your name" type="text" name="Name" required />
            </div>
            <div className="aboutH2 flex flex-col w-[100%] gap-[0.35rem]">
              <label className='text-[#eee2ca] text-sm select-none'>Email Address</label>
              <input className="bg-[#0f1219] px-[1rem] py-[0.65rem] text-sm text-[#eee2ca] rounded-full" placeholder="Enter your email" type="email" name="Email" required />
            </div>
            <div className="aboutH2 flex flex-col gap-[0.35rem] w-[100%]">
              <label className='text-[#eee2ca] text-sm select-none'>Message</label>
              <textarea rows="5" className="px-[1rem] py-[0.65rem] bg-[#0f1219] text-sm text-[#eee2ca] rounded-xl" placeholder="Type your message" type="text" name="Messsage" required />
            </div>
            <div className="w-[100%] h-auto">
            <button type="submit" className="bg-[#fd6d30ea] w-[100%] h-[2.5rem] mt-[1rem] transition-all duration-700 shadow-lg shadow-[#0f1219] hover:bg-[#fc6c2f] select-none font-bold text-[1rem] rounded-full text-[#0f1219]">Send Message</button>
            </div>
          </form>
         </div>
          <img className="aboutImg w-[40%] max-lg:w-[80%] h-auto" src="image/contact.png" alt="" />
      </div>
    </>
  )
}

export default Contact;
