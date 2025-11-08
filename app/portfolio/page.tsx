import Image from "next/image";
import Link from "next/link";
import styles from './portfolio.module.css'
export default function PortfolioPage() {
  return (
<main>
        <h1 className="portfolio">
          Portfolio
        </h1>
        <div className="project">
        <Link href="index.html">
        <Image className = {styles.project_image} src="website2.png" alt="Image of Website" width="300"/>
        </Link>
        </div>
        <div className="project-details">
          <p className="project-name">
            Personsal Website
          </p>
          <p className="project-description">
            Built through hack4impact bootcamp
          </p>
          <a href="index.html">Learn More</a>
        </div>
    </main>
);
}