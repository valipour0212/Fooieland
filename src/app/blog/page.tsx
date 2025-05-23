import React from "react";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import Title from "@/components/UI/Title";
import Description from "@/components/UI/Description";
import {TastyRecipes} from "@/app/Data/RecipesData";
import SearchBar from "@/app/blog/components/SearchBar";
import BlogList from "@/app/blog/components/BlogList";
import TastyRecipesCard from "@/app/blog/components/TastyRecipesCard";

export default function BlogPage() {
    return (
        <>
            <Header/>
            <main className="w-11/12 md:w-4/5 mx-auto my-20">
                <div className="text-center space-y-6 mb-20">
                    <Title text="Blog & Article"/>
                    <Description
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
                    <SearchBar/>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-9">
                        <BlogList/>
                    </div>
                    <div className="lg:col-span-3">
                        {TastyRecipes.map((recipe) => (
                            <TastyRecipesCard key={recipe.id} {...recipe} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
