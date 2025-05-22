import React from 'react';
import Image from "next/image";

export default function LearnMore() {
    return (
        <div className="w-11/12 sm:w-4/5 max-w-[1280] mx-auto relative aspect-[16/9] my-20 sm:my-40">
            <Image
                src="/assets/images/LearnMore.png"
                alt="LearnMore"
                fill
                className="object-contain rounded-lg"
                priority
            />
        </div>
    );
}
