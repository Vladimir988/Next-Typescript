import {useState} from "react";
import AddPost from '@/components/AddPost';
import Post from '@/components/Post';
import {InferGetStaticPropsType} from 'next';

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts';

export default function Posts({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [postList, setPostList] = useState(posts);
    const addPost = async (e, formData: IPost) => {
        e.preventDefault();
        const post: IPost = {
            id: Math.floor(100 + Math.random() * 900),
            title: formData.title,
            body: formData.body,
        }
        setPostList([post, ...postList]);
    }

    const deletePost = async (id: number) => {
        const posts: IPost[] = postList.filter((post: IPost) => post.id !== id);
        setPostList(posts);
    }

    if (!postList) return <h1>Loading...</h1>

    return (
        <main className='container'>
            <h1>Posts:</h1>
            <AddPost savePost={addPost}/>
            {postList.map((post: IPost) => (
                <Post key={post.id} deletePost={deletePost} post={post}/>
            ))}
        </main>
    )
}

export async function getStaticProps() {
    const res = await fetch(API_URL);
    const posts: IPost[] = await res.json();
    return {props: {posts}};
}