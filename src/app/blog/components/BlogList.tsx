import React from "react";
import BlogPostCard from "./BlogPostCard";
import { BlogPosts } from "@/app/Data/BlogPosts";

export default function BlogList() {
    return (
        <>
            {BlogPosts.map((post) => (
                <BlogPostCard key={post.id} {...post} name={post.author.name} />
            ))}
        </>
    );
}
