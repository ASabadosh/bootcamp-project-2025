import { NextRequest, NextResponse } from 'next/server'
import connectDB from "../../../../../src/database/db"
import type { IParams } from "../route.ts"
import Blog from "../../../../../src/database/blogSchema";

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB()
    const { slug } = await params;
	const body = await req.json();
	// validate body
	if (!body.user || !body.comment) {
		return NextResponse.json('Input not valid', { status: 404 })
	}
	
	// push comment object to document
	Blog.updateOne(
        {
    slug : slug
        }, 
        {
  $push: {
      comments: {user: body.user, comment: body.comment, time: new Date()}
  }
})
}