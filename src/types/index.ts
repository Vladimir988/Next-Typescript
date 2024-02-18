export interface IPost {
    [key: string]: string | number;
    id: number;
    title: string;
    body: string;
}

export interface IComment {
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface IOptions {
    value: string;
    name: string;
}