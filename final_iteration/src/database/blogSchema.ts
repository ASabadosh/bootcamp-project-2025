import mongoose, { Schema } from "mongoose";
import { Types } from 'mongoose';

export type IComment = {
		user: string;
		comment: string;
		time: Date;
		_id: Types.ObjectId;
}

// typescript type (can also be an interface)
export type Blog = {
		title: string;
	  	slug: string; 
		date: Date;
		description: string; // for preview
	  	content: string; // text content for individual blog page
		comments: IComment[]; // array for comments
		content_title: string;
};

const commentSchema = new Schema<IComment>({
	user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true, default: Date.now },
	_id: { type: Schema.Types.ObjectId, required: true, auto: true }
})

// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		content: { type: String, required: true},
		content_title: { type: String, required: true},
		comments: [commentSchema]
})

// defining the collection and model
const Blog = mongoose.models['Blog'] ||
    mongoose.model('Blog', blogSchema);

export default Blog;