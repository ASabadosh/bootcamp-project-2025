import type { Blog } from "../database/blogSchema";
import Link from "next/link";
import { parseCommentTime } from "./commentPreview"

export default function BlogPreview(props: Blog) {
  const date_string = parseCommentTime(props.date)
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className="flex flex-col bg-[#1a1a1a] rounded-2xl">
      <p className="text-[11px] text-white/35 tracking-wide mb-1">{date_string}</p>
      <p className = "text-base font-semibold  text-white"> {props.title} </p>
      <div>
        <Link className="text-[#85B7EB] text-[13px] hover:underline" href={`/blog/${props.slug}`}>{props.description}</Link>
      </div>
	  </div>
  );
}