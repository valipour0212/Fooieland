import React from 'react';

type TextPropsType = {
    text: string;
    className?: string;
}

export default function Description({text, className = ""}: TextPropsType) {
    return (
        <p className={`font-normal text-base sm:text-lg text-black opacity-60 ${className}`}>
            {text}
        </p>
    );
}
