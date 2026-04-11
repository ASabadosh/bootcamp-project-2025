"use client";

import Comment from "./commentPreview"
import type { IComment } from "../src/database/blogSchema"
import { useState } from "react";
import styles from "../app/blog/blog_page.module.css";

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
        setComments(prev => [...prev, newComment]);
        form.reset();
    }


    return (
        <div className={styles.commentSection}>
  <h1>Comments</h1>

  <div className={styles.commentList}>
    {current_comments.map(comment => (
      <Comment key = {comment.user} comment={comment} />
    ))}
  </div>

  <form onSubmit={handleSubmit} className={styles.commentForm}>
    <input placeholder="Your name" name="user" />
    <textarea placeholder="Your comment" name="comment" />
    <button type="submit">Add Comment</button>
  </form>
</div>
    );
}

export default CommentSection;