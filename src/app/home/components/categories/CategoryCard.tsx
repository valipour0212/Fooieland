import Image from "next/image";

import React, {JSX} from "react";


export default function CategoryCard({title, image, gradient}: CategoryCardPropsType): JSX.Element {
    return (
        <div className="relative w-24 sm:w-32 md:w-36 lg:w-44 h-28 sm:h-32 md:h-36 lg:h-40 rounded-2xl overflow-hidden">

            {/* Image */}
            <Image
                src={image}
                alt={title}
                width={80}
                height={80}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[80%] rounded-2xl object-cover z-20"
                priority
            />

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${gradient} rounded-2xl z-10`}/>

            {/* Title */}
            <span
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 text-black text-xs sm:text-sm md:text-base font-semibold drop-shadow-md text-center"
            >
                {title}
            </span>
        </div>
    );
}

