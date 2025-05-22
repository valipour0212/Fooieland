import React from 'react';

type TitlePropsType = {
    text: string;
    className?: string; // اضافه‌شده برای استایل ریسپانسیو
}

export default function Title({text, className = ""}: TitlePropsType) {
    return (
        <h2 className={`font-semibold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] ${className}`}>
            {text}
        </h2>
    );
}
