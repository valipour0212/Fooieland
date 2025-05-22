import React from 'react';

type TextPropsType = {
    text: string;
}

export default function CardDescription({ text }: TextPropsType) {
    return (
        <p className="font-normal text-xs sm:text-sm md:text-base text-[#000000] opacity-60">{text}</p>
    );
}
