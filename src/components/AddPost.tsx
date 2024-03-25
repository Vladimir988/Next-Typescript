import React, {FC, useState} from 'react';
import {IPost} from "@/types";

interface Props {
    savePost: (e: React.FormEvent<HTMLFormElement>, formData: IPost) => void;
}

const AddPost: FC<Props> = ({savePost}) => {
    const [formData, setFormData] = useState<IPost>();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target?.name]: e.target?.value,
        } as IPost));
    }

    const savePostHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        if(formData) savePost(event, formData);
    }

    return (
        <form className='Form' onSubmit={savePostHandler}>
            <div className='input-wrap'>
                <div className='Form--field'>
                    <label htmlFor='name'>Title</label>
                    <input onChange={changeHandler} type='text' id='title' name='title' placeholder='Title'/>
                </div>
                <div className='Form--field'>
                    <label htmlFor='body'>Description</label>
                    <textarea onChange={changeHandler} name='body' id='body' placeholder='Description'></textarea>
                </div>
            </div>
            <button
                className='Form__button'
                disabled={formData === undefined ? true : false}
            >
                Add Post
            </button>
        </form>
    );
}

export default AddPost;