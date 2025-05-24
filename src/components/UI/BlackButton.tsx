import React from 'react';
import Image from "next/image";

type ButtonPropsType = {
    text: string;
    icon?: string;
    width?: number;
}

export default function BlackButton({text, icon, width}: ButtonPropsType) {
    return (
        <button
            style={{width: width ? `${width}px` : '100%'}}
            className="h-[50px] sm:h-[56px] md:h-[60px] bg-black font-semibold text-sm sm:text-base md:text-lg text-white flex justify-center items-center gap-2 rounded-2xl px-2"
        >
            {text}
            {icon &&
                <Image
                    src={icon}
                    alt={icon}
                    width={24}
                    height={24}
                />
            }
        </button>
    );
}
