import css from "@/styles/TodoItem.module.scss";
import React, {FC, useState} from 'react';
import {ITodo} from "@/types";

type Props = {
    todo: ITodo;
}

const TodoItem: FC<Props> = ({todo}) => {
    const [checked, setChecked] = useState(todo.completed);

    const setCheckedHandler = (): void => {
        setChecked(!checked);
    }

    return (
        <div className={css.todoItem}>
            <input type="checkbox" checked={checked} onChange={setCheckedHandler}/> || {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;