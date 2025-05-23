import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TastyRecipesCard({ id, image, title, name }: TastyRecipesType) {
    return (
        <Link href={`/recipes/${id}`} className="block mb-6">
            <div className="flex gap-4 items-center">
                <Image src={image} alt={title} width={120} height={80} className="rounded-2xl" />
                <div>
                    <p className="font-semibold text-lg">{title}</p>
                    <p className="text-sm text-gray-500">{name}</p>
                </div>
            </div>
        </Link>
    );
}
