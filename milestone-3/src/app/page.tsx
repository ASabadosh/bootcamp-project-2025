import Link from "next/link";
import About from "../Sections/About"
import Blog from "../Sections/Blog"
import Contact from "../Sections/Contact"
import Portfolio from "../Sections/Portfolio"


export default function HomePage() {
  return (
<main>
      <About/>
      <Blog/>
      <Contact/>
      <Portfolio/>
</main>
);
}