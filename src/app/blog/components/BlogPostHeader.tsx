import React from "react";
import Image from "next/image";
import Title from "@/components/UI/Title";

type Props = {
    title: string;
    author: string;
    date: string;
};

export default function BlogPostHeader({ title, author, date }: Props) {
    return (
        <div className="text-center space-y-6">
            <Title text={title} />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                    <Image src="/assets/images/Ellipse 2.png" alt={author} width={40} height={40} className="rounded-full" />
                    <span className="font-bold text-sm">{author}</span>
                </div>
                <span className="text-sm text-gray-500">{date}</span>
            </div>
            <p className="text-sm text-gray-500 px-4 md:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio...
            </p>
        </div>
    );
}
