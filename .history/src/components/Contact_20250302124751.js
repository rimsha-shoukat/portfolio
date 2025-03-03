import React, { useState } from 'react'

function Contact() {
  const [valid, setValid] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [err, setErr] = useState();
  const [result, setResult] = React.useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "10693bc2-74fa-459d-93c9-5f095012ff0b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  function sendMessage(){
    if(!email && !message && !name){
      setValid(false);
      setErr("Please fill in the form*");
      return;
    }else if(!name){
      setValid(false);
      setErr('Please enter your name*')
    }
    else if(!email){
      setValid(false);
      setErr('Please enter an email address*');     
      return;
    }else if(!validateEmail(email)){
      setValid(false);
      setErr('Please enter a valid email address*');
      return;
    }else if(!message){
      setValid(false);
      setErr('Please enter a message');
      return;
    }else if(message && validateEmail(email) && name){
      setValid(true);
      setErr('*Your message has been sent successfully!');
      setTimeout(() => {
        setErr(''); 
      }, 5000);
    }
  };

  return (
    <>
      <div className="flex font-sans flex-row max-lg:flex-col-reverse max-sm:px-[2rem] px-[8rem] gap-[4rem] py-[3rem] bg-[#20232a] w-[100%] h-auto rounded-tr-[24rem] items-center justify-center">
        <div className="w-[50%] max-lg:w-[100%] max-md:px-0 px-[3rem] h-auto flex flex-col gap-[1.5rem] items-start justify-start">
         <div className="flex flex-col items-start justify-start gap-0">
            <h1 className='aboutH1 text-[#fc6c2f] leading-none font-bold text-[1.5rem] select-none'>Inquiry</h1>
            <h1 className="w-[100%] aboutH2 text-[2.5rem] max-xs:text-[2rem] select-none font-bold text-[#eee2ca]">Contact Me</h1>
            <div className="aboutUnder w-[4rem] select-none h-[0.35rem] rounded-full bg-[#fc6c2f]"></div>
         </div>
          <form>
            <div className="aboutH2 flex flex-col w-[100%] gap-[0.35rem]">
              <label className='text-[#eee2ca] text-sm select-none'>Full Name</label>
              <input onChange={
                e => setName(e.target.value)
              } className="bg-[#0f1219] px-[1rem] py-[0.65rem] text-sm text-[#eee2ca] rounded-full" placeholder="Enter your name" type="text" name="Name" required />
            </div>
            <div className="aboutH2 flex flex-col w-[100%] gap-[0.35rem]">
              <label className='text-[#eee2ca] text-sm select-none'>Email Address</label>
              <input onChange={
                e => setEmail(e.target.value)
              } className="bg-[#0f1219] px-[1rem] py-[0.65rem] text-sm text-[#eee2ca] rounded-full" placeholder="Enter your email" type="email"  required />
            </div>
            <div className="aboutH2 flex flex-col gap-[0.35rem] w-[100%]">
              <label className='text-[#eee2ca] text-sm select-none'>Message</label>
              <textarea onChange={
                e => setMessage(e.target.value)
              } rows="5" className="px-[1rem] py-[0.65rem] bg-[#0f1219] text-sm text-[#eee2ca] rounded-xl" placeholder="Type your message" type="text" required />
            </div>
            <div className="w-[100%] h-auto">
            <p className={`${valid ? 'text-[#008000]' : 'text-[#FF0000]'} w-[100%] h-[1.2rem] select-none text-sm text-center`}>{err}</p>
            <button type="submit" onClick={() => sendMessage()} className="bg-[#fc6c2f] w-[100%] h-[2.5rem] transition-all duration-700 shadow-lg shadow-[#0f1219] hover:bg-[#ff8c52f5] select-none font-bold text-[1rem] rounded-full text-[#0f1219]">Send Message</button>
            </div>
          </form>
         </div>
          <img className="aboutImg w-[40%] max-lg:w-[80%] h-auto" src="image/contact.png" alt="" />
      </div>
    </>
  )
}

export default Contact;
