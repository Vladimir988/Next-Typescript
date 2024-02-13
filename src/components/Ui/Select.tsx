import css from "@/styles/Select.module.scss";

const Select = ({defaultValue, options, value, onChange}) => {
    return (
        <select className={css.select} value={value} onChange={event => onChange(event.target.value)}>
            <option disabled key='' value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default Select;