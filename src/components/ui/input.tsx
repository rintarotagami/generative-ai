import React from 'react';

interface InputProps {
    id: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    className?: string;
}

export const Input: React.FC<InputProps> = ({ id, value, onChange, placeholder, type = "text", className }) => {
    return (
        <input
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            className={`form-input px-4 py-2 border rounded ${className}`}
        />
    );
};
