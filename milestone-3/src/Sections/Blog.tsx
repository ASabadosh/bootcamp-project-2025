import BlogPreview from "@/components/blogPreview";
import getBlogs from "../database/getBlogs";

export default async function BlogPage() {
  const blogs = await getBlogs();
  if (blogs == null) {
    return (
      <div className="scroll-mt-20">
        <h1 className="blog">Blog</h1>
        <p>Blogs are unable to be displayed</p>
      </div>
    );
  }
  return (
    <div className="scroll-mt-20 w-300 flex flex-col items-center">
      <div className="flex flex-col items-left w-full pl-25 mb-10">
      <h1 className="font-bold text-5xl mb-4 text-white">Blog</h1>
      </div>
      <div className="grid grid-cols-1 custom:grid-cols-2 gap-5 w-full">
        {blogs.map((blog) => (
          <BlogPreview // This is how we call the component
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            slug={blog.slug}
            comments={blog.comments}
            content={blog.content}
            content_title={blog.content_title}
          />
        ))}
      </div>
    </div>
  );
}
