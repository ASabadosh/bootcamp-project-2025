import CommentSection from "@/components/commentSection"
import type { IComment } from "@/database/blogSchema"
import { parseCommentTime } from "@/utils/date";
import Link from "next/link";



type Props = {
    params: Promise<{ slug: string }>
}

export async function getBlog(slug: string) {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
		const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
			cache: "no-store",	
		})
		// This checks that the GET request was successful
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
		// `` are a special way of allowing JS inside a string
		// Instead of "error: " + err, we can just do the above
		// it is simular to formated strings in python --> f"{err}"
	}
}

export default async function Blog({ params }: Props) {
	const { slug } = await params;
	const blog = await getBlog(slug);
	if (blog == null){
		return(
			<main>
			<p>Blog is unable to be displayed </p>
			</main>
		);
	}
	const date_string = parseCommentTime(blog.date);
	return(
        <main>
			<div className="flex flex-col mt-20 max-w-xl">
			<Link className="text-[#85B7EB] text-[13px] hover:underline" href={"/#blog"}>← Back to blog</Link>
			<p className="text-[11px] text-white/35 tracking-wide mt-8 mb-1"> {date_string} </p>
			<h1 className="text-[28px] font-medium text-white mb-4 leading-snug">{blog.content_title}</h1>
			<p className="text-[14px] leading-[1.75] text-white/55 max-w-135 mb-10">{blog.content}</p>
			<CommentSection
			comments = {blog.comments}
			slug = {blog.slug}/>
			</div>
        </main>
    );
}