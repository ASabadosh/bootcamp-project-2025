export function parseCommentTime(time: Date){
	/*
		Implementation up to you...
	*/
    const date = new Date(time);
    return date.toLocaleDateString();
}