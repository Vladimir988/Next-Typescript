import css from "@/styles/Post.module.scss";
import Link from "next/link";
import {InferGetServerSideProps} from 'next';
import {IPost, IComment} from "@/types";

export default function SinglePost({post, comments}: InferGetServerSideProps<typeof getServerSideProps>) {
    return (
        <div className={`container ${css.post}`}>
            <Link className={css.back} href='/posts'>← Back</Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments:</h2>
            <div className={css.comments}>
                {comments.map(comment =>
                    <div className={css.comment} key={comment.id}>
                        <p><b>Name:</b> {comment.name}</p>
                        <p><b>Email:</b> {comment.email}</p>
                        <p><b>Comment:</b> {comment.body}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts';

export async function getServerSideProps({params}) {
    const postData             = await fetch(`${API_URL}/${params.id}`);
    const commentsData         = await fetch(`${API_URL}/${params.id}/comments`);
    const post: IPost          = await postData.json();
    const comments: IComment[] = await commentsData.json();
    return {props: {post, comments}};
}