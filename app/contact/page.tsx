import styles from "./contact.module.css";
export default function ContactPage() {
  return (
		<main>
        <h1 className="contact"> 
          Contact
        </h1>
        <form id="contact-form">

        
        <div className={styles.input}>
        <label className = {styles.label} htmlFor="name">Name</label>
        <input className = {styles.area} type="text" id="name" name="name"/>
        </div>
       
        
        <div className={styles.input}>
        <label className = {styles.label} htmlFor="email">Email</label>
        <input className = {styles.area} type="email" id="email" name="email"/>
        </div>

        <div className={styles.input}>
        <label className = {styles.label} htmlFor="message">Message</label>
        <textarea className = {styles.area} id="message" name="message">
        </textarea>
        </div>

        <div className={styles.input}>
        <input className = {styles.label} type="submit"/>
        </div>

        </form>
    </main>
  );
}