import BlogPreview from '@/components/blogPreview';
import blogs from "../blogData";

export default function BlogPage() {
  return (
<main>
        <h1 className="blog">
          Blog
        </h1>
        {blogs.map(blog => 
      <BlogPreview // This is how we call the component
      
      key = {blog.slug}
      title={blog.title}
      description={blog.description}
      image={blog.image}
      imageAlt = {blog.imageAlt}
      date={blog.date}
      slug={blog.slug}
     
      />
		)}
    </main>
);
}