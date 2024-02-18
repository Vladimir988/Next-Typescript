import React, {FC} from 'react';
import {IPost} from "@/types";

type Props = {
    value: string;
    onChange: (value: keyof IPost) => void;
}

const Input: FC<Props> = ({value, onChange}) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={event => onChange(event.target.value as keyof IPost)}
        />
    );
};

export default Input;