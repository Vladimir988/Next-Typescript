import React, {FC, useState} from 'react';
import {ITodo} from "@/types";

type Props = {
    todo: ITodo;
}

const TodoItem: FC<Props> = ({todo}) => {
    const [checked, setChecked] = useState(todo.completed);

    return (
        <div style={{padding: '20px', borderRadius: '5px', margin: '5px 0', border: '1px solid #920dbb'}}>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/> || {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;