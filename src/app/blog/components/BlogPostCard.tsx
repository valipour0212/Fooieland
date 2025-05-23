import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    name: string;
};

export default function BlogPostCard({ id, image, title, subtitle, name }: Props) {
    return (
        <div className="flex flex-col md:flex-row gap-6 mb-8">
            <Image src={image} alt={title} width={290} height={200} className="rounded-3xl object-cover" />
            <div className="flex flex-col justify-between gap-4">
                <Link href={`/blog/${id}`}>
                    <span className="font-semibold text-xl md:text-2xl hover:underline">{title}</span>
                </Link>
                <span className="text-base text-gray-600">{subtitle}</span>
                <div className="flex items-center gap-3">
                    <Image src="/assets/images/Ellipse 2.png" alt="Author" width={40} height={40} className="rounded-full" />
                    <span className="font-bold text-sm">{name}</span>
                </div>
            </div>
        </div>
    );
}
