import {FC} from 'react';
import Link from "next/link";
import {IPost} from "@/types";

type Props = {
    post: IPost;
    deletePost: (id: number) => void;
}

const Post: FC<Props> = ({ post, deletePost }) => {
    return (
        <div className='Card'>
            <div className='Card--body'>
                <h1 className='Card--body-title'>{post.id}. {post.title}</h1>
                <p className='Card--body-text'>{post.body}</p>
            </div>
            <div className='btn-block'>
                <Link className='btn Card__button' href={`/posts/${post.id}`}>Open →</Link>
                <button className='Card__button' onClick={() => deletePost(post.id)}>Delete</button>
            </div>
        </div>
    );
}

export default Post