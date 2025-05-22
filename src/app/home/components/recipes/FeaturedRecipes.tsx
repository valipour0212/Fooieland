import Image from "next/image";
import {JSX} from "react";

export default function FeaturedRecipe(): JSX.Element {
    return (
        <div className="w-full max-w-[1280px] mx-auto relative aspect-[2/1] mt-10">
            <Image
                src="/assets/images/FeaturedRecipe.png"
                alt="FeaturedRecipe"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
                priority
            />
        </div>
    );
}