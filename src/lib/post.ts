import {BlogPosts} from "@/app/Data/BlogPosts";

export function getBlogPost(id: number): BlogPostType | undefined {
    return BlogPosts.find(post => post.id === id);
}