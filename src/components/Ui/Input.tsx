import React, {FC} from 'react';

type Props = {
    value: string;
    onChange: (value: string) => void;
}

const Input: FC<Props> = ({value, onChange}) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={event => onChange(event.target.value)}
        />
    );
};

export default Input;