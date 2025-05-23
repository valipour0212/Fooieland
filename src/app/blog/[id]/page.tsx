import {getBlogPost} from "@/lib/post";
import {notFound} from "next/navigation";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import BlogPostHeader from "@/app/blog/components/BlogPostHeader";
import BlogPostContent from "@/app/blog/components/BlogPostContent";
import BlogPostRecommendations from "@/app/blog/components/BlogPostRecommendations";


type BlogPostPropsType = {
    params: {
        id: string;
    };
};

export default function BlogPostPage({params}: BlogPostPropsType) {
    const postId = Number(params.id);
    const post = getBlogPost(postId);

    if (!post) return notFound();

    return (
        <>
            <Header/>
            <main className="w-11/12 md:w-4/5 mx-auto my-20 flex flex-col items-center">
                <BlogPostHeader title={post.title} author={post.author.name} date="15 March 2022"/>
                <BlogPostContent/>
                <BlogPostRecommendations/>
            </main>
            <Footer/>
        </>
    );
}
