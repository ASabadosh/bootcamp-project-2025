import React from 'react';
import styles from './portfolioPreview.module.css'
import type { Portfolio } from "../src/database/portfolioSchema";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPreview(props: Portfolio) {
  return (
    <div className="project">
        <Link href= {props.link}>
        <Image className = {styles.project_image} src= {props.image} alt= {props.image_alt} width="300" height = "300"/>
        </Link>
      <p className="project-name">
            {props.project_name}
          </p>
      <p className="project-description">
            {props.project_description}
          </p>
           <Link href= {props.link}>Learn More</Link>
    </div>
  );
}