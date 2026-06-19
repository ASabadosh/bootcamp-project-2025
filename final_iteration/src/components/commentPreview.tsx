import type { IComment } from "@/database/blogSchema"
import { parseCommentTime } from "@/utils/date";


{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}


function Comment({ comment }: CommentProps) {
    return (
        <div className="flex flex-col bg-[#1a1a1a] border border-white/[0.08] p-4">
            <p className="text-[13px] font-medium text-white mb-1">{comment.user}:</p>
            <p className="text-[11px] text-white/35 mb-1">{parseCommentTime(comment.time)}</p>
            <p className="text-[14px] text-white/60 leading-relaxed">{comment.comment}</p>
        </div>
    );
}

export default Comment;