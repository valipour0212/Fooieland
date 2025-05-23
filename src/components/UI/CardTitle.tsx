import React from 'react';

type TextPropsType = {
    text: string;
}

export default function CardTitle({text}: TextPropsType) {
    return (
        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">{text}</h2>
    );
}
