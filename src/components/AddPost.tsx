import React, {FC, useState} from 'react';

type Props = {
    savePost: (e: React.FormEvent<HTMLFormElement>, formData: IPost) => void
}

const AddPost: FC<Props> = ({savePost}) => {
    const [formData, setFormData] = useState<IPost>();
    const changeHandler = (e: React.FormEvent<HTMLFormElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target?.id]: e.target?.value,
        } as IPost));
    }

    return (
        <form className='Form' onSubmit={(e) => savePost(e, formData as IPost)}>
            <div className='input-wrap'>
                <div className='Form--field'>
                    <label htmlFor='name'>Title</label>
                    <input onChange={changeHandler} type='text' id='title' name='title' placeholder='Title'/>
                </div>
                <div className='Form--field'>
                    <label htmlFor='body'>Description</label>
                    <textarea onChange={changeHandler} name='body' id='body' rows='5' placeholder='Description'></textarea>
                </div>
            </div>
            <button
                className='Form__button'
                disabled={formData === undefined ? true : false}
            >
                Add Post
            </button>
        </form>
    )
}

export default AddPost;