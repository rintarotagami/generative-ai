import React, { memo, useMemo } from "react";
import Select, { components } from "react-select";

interface OptionType {
    value: string;
    label: string;
    image?: string;
}

interface SelectComponentProps {
    id: string;
    options: OptionType[];
    placeholder?: string;
    onChange?: (selectedOption: OptionType | null) => void;
}

const CustomOption = (props: any) => {
    return (
        <components.Option {...props}>
            {props.data.image && (
                <img
                    src={props.data.image}
                    alt={props.data.label}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                />
            )}
            {props.data.label}
        </components.Option>
    );
};

const SelectComponent: React.FC<SelectComponentProps> = ({ id, options, placeholder, onChange }) => {
    const customStyles = useMemo(() => ({
        control: (provided: any) => ({
            ...provided,
            display: 'flex',
        }),
        option: (provided: any) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
        }),
    }), []);

    return (
        <Select
            inputId={id}
            options={options}
            placeholder={placeholder}
            onChange={onChange}
            styles={customStyles}
            components={{ Option: CustomOption }}
        />
    );
};

export default memo(SelectComponent);
