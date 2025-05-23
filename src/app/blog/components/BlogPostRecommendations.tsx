import React from "react";
import Title from "@/components/UI/Title";
import RecipeCard from "@/app/home/components/recipes/RecipeCard";
import { RecipesData } from "@/app/Data/RecipesData";

export default function BlogPostRecommendations() {
    return (
        <div className="mt-32 space-y-10 text-center">
            <Title text="You may like these recipes too" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {RecipesData.slice(0, 4).map((recipe) => (
                    <RecipeCard key={recipe.id} {...recipe} />
                ))}
            </div>
        </div>
    );
}
