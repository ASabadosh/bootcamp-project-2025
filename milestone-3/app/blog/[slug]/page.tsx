import CommentSection from "../../../components/commentSection"
import type { IComment } from "../../../src/database/blogSchema"
import styles from "../blog_page.module.css";



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
	return(
        <main>
			<h1>{blog.content_title}</h1>
			<p className = "blog_paragraph">{blog.content}</p>
			<CommentSection 

			comments = {blog.comments}
			slug = {blog.slug}/>

        </main>
    );
}