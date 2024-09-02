import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white rounded-full shadow-lg transform transition-transform hover:scale-105 ${className}`}
        >
            {children}
        </button>
    );
};
