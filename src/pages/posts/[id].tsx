import cn from 'classnames';
import classes from "@/styles/Post.module.scss";
import Link from "next/link";
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import {IPost, IComment} from "@/types";
import React from "react";
import HeadMeta from "@/components/Ui/HeadMeta";

export default function SinglePost({post, comments}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if (!post) return <h1>Loading...</h1>;

    return (
        <div className={cn(classes.post, ['container'])}>
            <HeadMeta title={post?.title} body={post?.body}/>
            <Link className={classes.back} href='/posts'>← Back</Link>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <h2>Comments:</h2>
            <div className={classes.comments}>
                {comments.map((comment: IComment) =>
                    <div className={classes.comment} key={comment?.id}>
                        <p><b>Name:</b> {comment?.name}</p>
                        <p><b>Email:</b> {comment?.email}</p>
                        <p><b>Comment:</b> {comment?.body}</p>
                    </div>
                )}
            </div>

        </div>
    );
}

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts';

export const getServerSideProps: GetServerSideProps = async (context) => {

    const id                   = context.params ? context.params.id : 1;
    const postData             = await fetch(`${API_URL}/${id}`);
    const commentsData         = await fetch(`${API_URL}/${id}/comments`);
    const post: IPost          = await postData.json();
    const comments: IComment[] = await commentsData.json();
    return {props: {post, comments}};
};