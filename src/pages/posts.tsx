import React, {useState} from "react";
import AddPost from '@/components/AddPost';
import Post from '@/components/Post';
import {InferGetStaticPropsType} from 'next';
import Head from "next/head";
import Select from "@/components/Ui/Select";
import {IPost} from "@/types";

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts';

function Input(props: { onChange: (value: (((prevState: string) => string) | string)) => void, placeholder: string, type: string, value: string }) {
    return null;
}

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
    const sortPosts = (sort: keyof IPost) => {
        setSelectedSort(sort);
    }

    function getSortedPosts() {
        console.log('selectedSort');
        console.log(selectedSort.length);
        console.log(selectedSort);
        if(selectedSort) {
            return [...postList].sort((post: IPost, postNext: IPost) => {
                return post[selectedSort].toString().localeCompare(postNext[selectedSort].toString());
            });
        }

        return postList;
    }

    const sortedPosts = getSortedPosts();

    const [searchQuery, setSearchQuery] = useState('');

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

            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />

            <Select
                defaultValue="Sort by"
                value={selectedSort}
                onChange={sortPosts}
                options={[
                    {value: 'title', name: 'Sort by title'},
                    {value: 'body', name: 'Sort by description'}
                ]}
            />
            
            {sortedPosts.map((post: IPost) => (
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