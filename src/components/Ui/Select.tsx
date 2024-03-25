import css from "@/styles/Select.module.scss";
import {IOptions, IPost} from "@/types";
import {FC} from "react";

interface Props {
    defaultValue: string;
    options: IOptions[];
    value: string;
    onChange: (value: keyof IPost) => void;
}

const Select: FC<Props> = ({defaultValue, options, value, onChange}) => {
    return (
        <select className={css.select} value={value} onChange={event => onChange(event.target.value as keyof IPost)}>
            <option disabled key='' value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default Select;