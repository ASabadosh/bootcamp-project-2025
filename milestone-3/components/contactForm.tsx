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
    <div>
<h1 className="contact"> 
          Contact
        </h1>
        <form className={styles.contact_form} onSubmit={handleSubmit}>

        
        <div className={styles.input}>
        <label className = {styles.label} htmlFor="name">Name</label>
        <input className = {styles.area} type="text" id="name" name="name"/>
        </div>
       
       <input type="hidden" name="time" value={new Date().toString()} />
        
        <div className={styles.input}>
        <label className = {styles.label} htmlFor="email">Email</label>
        <input className = {styles.area} type="email" id="email" name="email"/>
        </div>

        <div className={styles.input}>
        <label className = {styles.label} htmlFor="message">Message</label>
        <textarea className = {styles.area} id="message" name="message"/>
        </div>

        <div className={styles.input}>
        <button className = {styles.label} type="submit">Submit</button>
        </div>

        </form>
    </div>
    )
}

export default ContactForm;