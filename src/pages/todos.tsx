import React from 'react';
import TodoItem from "@/components/TodoItem";
import List from "@/components/List";
import {ITodo} from "@/types";
import {InferGetStaticPropsType} from "next";

const API_URL: string = 'https://jsonplaceholder.typicode.com/todos?_limit=100';

export default function Todos({todos}: InferGetStaticPropsType<typeof getStaticProps>) {
    if (!todos) return <h1>Loading...</h1>;

    return (
        <main className='container'>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />} />
        </main>
    );
}

export async function getStaticProps() {
    const res = await fetch(API_URL);
    const todos: ITodo[] = await res.json();
    return {props: {todos}};
}