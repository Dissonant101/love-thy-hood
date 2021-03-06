import Comment from "./comment.type";

export default interface Post {
    _id?: string,
    files: string[],
    caption: string,
    user: string,
    likes: string[], // User ids
    comments: Comment[] // Comment objects
    createdAt?: Date,
    updatedAt?: Date
};
