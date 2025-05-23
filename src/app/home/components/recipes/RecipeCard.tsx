"use client"

import Image from "next/image";
import CardTitle from "@/components/UI/CardTitle";
import CardDescription from "@/components/UI/CardDescription";
import {JSX, useState} from "react";
import Link from "next/link";


export default function RecipeCard({id, image, title, time, category, isLike}: RecipeCardPropsType): JSX.Element {
    const [liked, setLiked] = useState(isLike);

    function handleLikeToggle(): void {
        setLiked(prev => !prev);
    }

    return (
        <Link href={`/recipes/${id}`}>
            <div
                className="bg-gradient-to-t from-[#E7F9FD] to-transparent rounded-4xl w-[400px] h-[450px] mx-auto flex flex-col justify-between">
                {/* Image */}
                <div className="p-4">
                    <div className="relative w-full rounded-4xl overflow-hidden">

                        <Image
                            src={image}
                            alt={title}
                            width={368}
                            height={250}
                            className="object-cover rounded-4xl"
                        />

                        <div
                            className="absolute top-5 right-5 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={handleLikeToggle}>

                            <Image
                                src={liked ? "/assets/images/RedHeart.png" : "/assets/images/WhiteHeart.png"}
                                alt="Heart"
                                width={24}
                                height={24}/>
                        </div>

                    </div>
                </div>
                {/* Text */}
                <div className="p-4 flex flex-col justify-center text-left space-y-10">
                    <CardTitle text={title}/>
                    <div className="flex space-x-4">
                        <div className="flex space-x-2 sm:space-x-3 items-center">
                            <Image src="/assets/images/Timer.png" alt="timer" width={20} height={20}/>
                            <CardDescription text={`${time} Minutes`}/>
                        </div>

                        <div className="flex space-x-2 sm:space-x-3 items-center">
                            <Image src="/assets/images/ForkKnife.png" alt="timer" width={20} height={20}/>
                            <CardDescription text={category}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

