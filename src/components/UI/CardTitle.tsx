import React from 'react';

type TextPropsType = {
    text: string;
}

export default function CardTitle({text}: TextPropsType) {
    return (
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl">{text}</h2>
    );
}
