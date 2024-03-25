import React, {useMemo, useState} from "react";
import AddPost from '@/components/AddPost';
import Post from '@/components/Post';
import {InferGetStaticPropsType} from 'next';
import Select from "@/components/Ui/Select";
import Input from "@/components/Ui/Input";
import {IPost} from "@/types";
import HeadMeta from "@/components/Ui/HeadMeta";

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
    const sortPosts = (sort: keyof IPost) => {
        setSelectedSort(sort.toString());
    }

    const sortedPosts = useMemo(() => {
        if(selectedSort) {
            return [...postList].sort((post: IPost, postNext: IPost) => {
                return post[selectedSort].toString().localeCompare(postNext[selectedSort].toString());
            });
        }

        return postList;
    }, [selectedSort, postList]);

    const [searchQuery, setSearchQuery] = useState('');
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, sortedPosts]);

    if (!postList) return <h1>Loading...</h1>;

    return (
        <main className='container'>
            <HeadMeta title={title} body={descr}/>
            <h1>{title}:</h1>
            <AddPost savePost={addPost}/>

            <Input
                value={searchQuery}
                onChange={setSearchQuery}
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
            
            {sortedAndSearchedPosts.length ? sortedAndSearchedPosts.map((post: IPost) => (
                <Post key={post.id} deletePost={deletePost} post={post}/>
            )) : <h2 style={{textAlign: 'center'}}>Posts not found!</h2>}
        </main>
    );
}

export async function getStaticProps() {
    const res = await fetch(API_URL);
    const posts: IPost[] = await res.json();
    return {props: {posts}};
}