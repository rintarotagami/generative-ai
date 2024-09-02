import React from 'react';

interface CheckboxProps {
    id: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, checked = false, onChange }) => {
    return (
        <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
        />
    );
};


