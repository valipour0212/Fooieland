import React from "react";
import Image from "next/image";

export default function BlogPostContent() {
    return (
        <div className="my-16">
            <Image
                src="/assets/images/recipes/img-01.png"
                alt="Blog Cover"
                width={1280}
                height={600}
                className="rounded-4xl w-full max-h-[600px] object-cover mb-12"
            />
            <p className="text-gray-700 text-base leading-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ipsam magnam molestias?
                Aperiam asperiores, debitis deserunt earum enim facere fugit harum illum incidunt ipsa iste...
            </p>
        </div>
    );
}
