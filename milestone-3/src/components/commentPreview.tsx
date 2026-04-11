import type { IComment } from "../src/database/blogSchema"
import styles from './commentPreview.module.css'


{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
export function parseCommentTime(time: Date){
	/*
		Implementation up to you...
	*/
    const date = new Date(time);
    return date.toLocaleDateString();
}

function Comment({ comment }: CommentProps) {
    return (
        <div className = {styles.comment}>
            <h4>{comment.user}:</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;