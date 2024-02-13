export interface IPost {
    id: number;
    title: string;
    body: string;
    comment?: IComment;
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