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
      <nav className={styles.navbar}>    
    <h1 className={styles.logo}>
      <a href="/">Avi's Personal Website</a>
    </h1>
    <ul className={styles.navlist}>
        <li> <a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav> 
    </header>
  );
}