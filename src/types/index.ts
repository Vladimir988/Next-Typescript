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

export interface IMeta {
    title?: string;
    name: string;
    content: string;
}


interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}