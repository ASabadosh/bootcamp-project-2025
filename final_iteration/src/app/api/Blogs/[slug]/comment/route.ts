import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import Blog from "@/database/blogSchema";

type IParams = {
        params: Promise<{
        slug: string
    }>
}

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB()
    const { slug } = await params;
	const body = await req.json();
	// validate body
	if (!body.user || !body.comment) {
		return NextResponse.json('Input not valid', { status: 404 })
	}
	
	// push comment object to document
    const newComment = {
        user: body.user,
        comment: body.comment,
        time: new Date(),
    };
	const updatedBlog = await Blog.findOneAndUpdate(
        { slug : slug }, 
        { $push: { comments: newComment } },
        { new: true }
    );

    if (!updatedBlog) {
        return NextResponse.json("Blog not found", { status: 404 });
    }

    const savedComment = updatedBlog.comments[updatedBlog.comments.length - 1];
  
    return NextResponse.json(savedComment);
}