import React from 'react';
import style from './blogPreview.module.css'
import type { Blog } from "../app/blogData";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div}>
      <h3> {props.title} </h3>
      <div>
        <p>{props.date}.</p>
		// we will replace img with Image, made to optimize images produced with Next.js
		<Image src={props.image} alt={props.imageAlt} width={500} height={500}/>
        <Link href={props.slug}>{props.description}</Link>
      </div>
	  </div>
  );
}