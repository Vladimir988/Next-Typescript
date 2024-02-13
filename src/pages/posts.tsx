import React, {useState} from "react";
import AddPost from '@/components/AddPost';
import Post from '@/components/Post';
import {InferGetStaticPropsType} from 'next';
import Head from "next/head";
import Select from "@/components/Ui/Select";

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts';

export default function Posts({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
    const title = 'Posts';
    const descr = 'Lorem ipsum dolor sit amet';
    const [postList, setPostList] = useState(posts);
    const addPost = async (e: React.FormEvent, formData: IPost) => {
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

    const [selectedSort, setSelectedSort] = useState('');

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPostList([...postList].sort((a, b) => a[sort].localeCompare(b[sort])));
    }

    if (!postList) return <h1>Loading...</h1>;

    return (
        <main className='container'>
            <Head>
                <meta name="title" content={title}></meta>
                <meta name="description" content={descr}></meta>
                <title>{title}</title>
            </Head>
            <h1>{title}:</h1>
            <AddPost savePost={addPost}/>

            <Select
                defaultValue="Sort by"
                value={selectedSort}
                onChange={sort => sortPosts(sort)}
                options={[
                    {value: 'title', name: 'Sort by title'},
                    {value: 'body', name: 'Sort by description'}
                ]}
            />
            
            {postList.map((post: IPost) => (
                <Post key={post.id} deletePost={deletePost} post={post}/>
            ))}
        </main>
    );
}

export async function getStaticProps() {
    const res = await fetch(API_URL);
    const posts: IPost[] = await res.json();
    return {props: {posts}};
}