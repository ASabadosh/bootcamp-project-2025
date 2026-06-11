import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className = {"sticky top-0"}>
      <nav className={"z-10 flex justify-between items-centerbg-opacity-70 backdrop-blur-md shadow-md py-4 px-4 mx-16"}>    
    <h1 className={"text-4xl font-bold"}>
      AVI SABADOSH
    </h1>
    <ul className={"flex items-center gap-12"}>
        <li><a href="/#about" className="text-[15px] tracking-wider transition-colors hover:text-gray-300">HOME</a></li>
        <li><a href="/#portfolio" className="text-[15px] tracking-wider">PORTFOLIO</a></li>
        <li><a href="/#blog" className="text-[15px] tracking-wider">BLOG</a></li>
      </ul>
      <a href="/#contact" className="block rounded-full bg-[#a7a7a7] text-black border-none py-3 px-8 font-medium transition-color duration-500 hover:bg-white">CONTACT</a>
    </nav> 
  </header>
  );
}