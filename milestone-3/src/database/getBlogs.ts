import connectDB from "./db"; 
import Blog from "./blogSchema";

export default async function getBlogs(){
	try {
		await connectDB() // function from db.ts before
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}