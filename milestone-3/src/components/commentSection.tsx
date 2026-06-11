"use client";

import Comment from "./commentPreview"
import type { IComment } from "@/database/blogSchema"
import { useState } from "react";

type CommentSectionProps = {
    comments: IComment[];
    slug: string;
};

function CommentSection({ comments, slug }: CommentSectionProps) {

    const [current_comments, setComments] = useState<IComment[]>(comments);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault();
        const form = e.currentTarget;
        const user = (form.elements.namedItem("user") as HTMLInputElement).value;
        const comment = (form.elements.namedItem("comment") as HTMLTextAreaElement).value;

         //returns updated comments list
        const res = await fetch(`/api/Blogs/${slug}/comment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user, comment }),
        });
        
        const newComment: IComment = await res.json();

        if (!res.ok) {
          alert("Failed to post comment.");
          return;
        }

        setComments(prev => [...prev, newComment]);
        form.reset();
    }


    return (
        <div className="border-t border-white/10 pt-8">
        <h2 className="text-lg font-medium text-white mb-6">Comments</h2>
        <div className="flex flex-col gap-4 mb-9">
            {current_comments.map(comment => (
              <Comment key={comment._id.toString()} comment={comment} />
            ))}
        </div>
        <h2 className="text-[15px] font-medium text-white mb-4 border-t border-white/10 pt-6">Leave a comment</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <input type="text" placeholder="Your name" name="user" className="bg-[#1a1a1a] border border-white/[0.12] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-white/30 w-full"/>

        <textarea placeholder="Your comment" name="comment" rows={4} className="bg-[#1a1a1a] border border-white/[0.12] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-white/30 w-full resize-none font-sans"/>
        
        <button type="submit" className="bg-[#a7a7a7] text-black text-[13px] font-medium px-6 py-2.5 rounded-full self-start tracking-wide hover:bg-white transition-colors duration-300 cursor-pointer">
          Add Comment
        </button>
        </form>
        </div>
    );
}

export default CommentSection;