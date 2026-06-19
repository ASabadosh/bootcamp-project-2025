import BlogPreview from "@/components/blogPreview";
import getBlogs from "../database/getBlogs";

export default async function BlogPage() {
  const blogs = await getBlogs();
  if (blogs == null) {
    return (
      <div className="flex flex-col items-center scroll-mt-20">
        <h1 className="font-bold text-3xl mb-4 text-white">Blog</h1>
        <p className="text-red-500">Blogs previews are unable to be displayed</p>
      </div>
    );
  }
  return (
    <div id="blog" className="scroll-mt-20 w-300 flex flex-col items-center">
      <div className="flex flex-col items-left w-full pl-25 mb-10">
      <h1 className="font-bold text-5xl mb-4 text-white">Blog</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
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
