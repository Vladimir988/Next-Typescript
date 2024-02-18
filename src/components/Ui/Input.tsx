import css from "@/styles/Input.module.scss";
import React, {FC} from 'react';

type Props = {
    value: string;
    onChange: (value: string) => void;
}

const Input: FC<Props> = ({value, onChange}) => {
    return (
        <input
            className={css.input}
            type="text"
            placeholder="Search..."
            value={value}
            onChange={event => onChange(event.target.value)}
        />
    );
};

export default Input;