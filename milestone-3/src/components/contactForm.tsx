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
    <div className="flex flex-row bg-[#1a1a1a] border border-white/[0.08] rounded-xl p-8">
        <div className="flex flex-col w-[500px]">
        <h1 className="contact"> 
          Let's Talk
        </h1>
        <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>

        <input type="text" id="name" name="name" placeholder="Name"className="bg-[#222] border border-white/10 rounded-lg px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-white/30 w-full"/>

        <input type="hidden" name="time" value={new Date().toString()} />

        <input type="email" id="email" name="email" placeholder="Email" className="bg-[#222] border border-white/10 rounded-lg px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-white/30 w-full"/>

        <textarea id="message" name="message" rows={4} placeholder="Message" className="bg-[#222] border border-white/10 rounded-lg px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-white/30 w-full"/>

        <div className={styles.input}>
        <button className = {styles.label} type="submit" placeholder="Send Message">Submit</button>
        </div>  

        </form>
        </div>
        <div className="flex flex-col w-[500px]">
        <p>Email</p>
        <p>avisabadosh895@gmail.com</p>
        <p>Github</p>
        <p>github.com/ASabadosh</p>
        <p>Resume</p>
        
        </div>
    </div>
    )
}

export default ContactForm;