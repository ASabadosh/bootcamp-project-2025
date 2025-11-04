import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header>
      <h1> Avi's Personal Website </h1>
      <nav className={styles.navbar}>    
    <h1 className={styles.logo}>
      <Link href="index.html">Avi's Personal Website</Link>
    </h1>
    <ul className={styles.navlist}>
        <li> <Link href="">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="portfolio.html">Portfolio</Link></li>
        <li><Link href="resume.html">Resume</Link></li>
        <li><Link href="contact.html">Contact</Link></li>
      </ul>
    </nav> 
    </header>
  );
}