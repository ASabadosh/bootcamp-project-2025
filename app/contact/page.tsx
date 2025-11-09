import styles from "./contact.module.css";
export default function ContactPage() {
  return (
		<main>
        <h1 className="contact"> 
          Contact
        </h1>
        <form id="contact-form">

        <div className={styles.input}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"/>
        </div>
        
        <div className={styles.input}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"/>
        </div>

        <div className={styles.input}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message">
        </textarea>
        </div>

        <div className={styles.input}>
        <input type="submit"/>
        </div>

        </form>
    </main>
  );
}