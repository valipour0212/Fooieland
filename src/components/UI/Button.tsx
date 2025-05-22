import React from 'react';

type ButtonPropsType = {
    text: string
}

export default function Button({text}: ButtonPropsType) {
    return (
        <button
            className="w-full max-w-[200px] h-[50px] sm:h-[56px] md:h-[60px] bg-[#E7FAFE] font-semibold text-sm sm:text-base md:text-lg flex justify-center items-center rounded-2xl"
        >
            {text}
        </button>
    );
}
