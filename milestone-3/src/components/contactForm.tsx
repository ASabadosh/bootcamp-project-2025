"use client";

import { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contactForm.module.css";

function ContactForm() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_6nvcpao",
        "template_xqut50r",      
        e.currentTarget,     
        "ied3sUdgXt59p3Xh3"
      );
    alert("Message sent!");
    e.currentTarget.reset();
    } catch (err) {
      alert("Failed to send message. Please try again.");
    }
  }
    return(
    <div className="flex flex-col bg-[#1a1a1a] border border-white/[0.08] rounded-xl p-8">
        <div className="">
        <h2 className="text-[34px] font-bold text-white mb-8 leading-tight"> 
          Let's Talk
        </h2>
        </div>
        <div className="flex flex-row gap-20">
        <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>

        <input type="text" id="name" name="name" placeholder="Name"className="bg-[#222] border border-white/10 rounded-lg px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-white/30 w-full"/>

        <input type="hidden" name="time" value={new Date().toString()} />

        <input type="email" id="email" name="email" placeholder="Email" className="bg-[#222] border border-white/10 rounded-lg px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-white/30 w-full"/>

        <textarea id="message" name="message" rows={4} placeholder="Message" className="bg-[#222] border border-white/10 rounded-lg px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-white/30 w-full"/>

        <div className={styles.input}>
        <button type="submit" className="w-full bg-white text-black text-[13px] font-medium py-3 rounded-lg tracking-wide hover:bg-gray-100 transition-colors duration-300 cursor-pointer mt-1">Send Message</button>
        </div>  

        </form>
        <div className="flex flex-col gap-2 w-[500px]">
        <p className="text-[13px] font-medium text-white/45 tracking-[0.08em] uppercase">Email</p>
        <p className="mb-1">avisabadosh895@gmail.com</p>
        <p className="text-[13px] font-medium text-white/45 tracking-[0.08em] uppercase">Github</p>
        <a href="https://github.com/ASabadosh" className="text-[#85B7EB] hover:underline mb-3" target="_blank" rel="noopener noreferrer">github.com/ASabadosh</a>
        <button className= "bg-[#2a2a2a] border border-white/[0.12] rounded-lg px-4 py-2.5 text-[13px] font-bold text-white hover:border-white/30 transition-colors cursor-pointer">Download Resume</button>
        </div>
        </div>
    </div>
    )
}

export default ContactForm;