import React from 'react';

interface SwitchProps {
    id: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const Switch: React.FC<SwitchProps> = ({ id, checked = false, onChange, className }) => {
    return (
        <label htmlFor={id} className={`switch ${className}`}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                className="switch-input"
            />
            <span className="switch-slider"></span>
        </label>
    );
};
