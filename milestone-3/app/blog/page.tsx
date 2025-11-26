import BlogPreview from '@/components/blogPreview';
import getBlogs from "../../src/database/getBlogs";
import styles from "./blog.module.css";


export default async function BlogPage() {
  const blogs = await getBlogs();
  if (blogs == null) {
    return(
      <main>
      <h1 className="blog">
          Blog
        </h1>
        <p>Blogs are unable to be displayed</p>
      </main>
    );
  }
  return (
<main>
        <h1 className="blog">
          Blog
        </h1>
        <div className = {styles.blogContainer}>
        {blogs.map(blog => 
      <BlogPreview // This is how we call the component
      
      key = {blog.slug}
      title={blog.title}
      description={blog.description}
      image={blog.image}
      image_alt = {blog.image_alt}
      date={blog.date}
      slug={blog.slug}
      comments={blog.comments}
      content={blog.content}
      content_title = {blog.content_title}
     
      />
		)}
    </div>
    </main>
);
}