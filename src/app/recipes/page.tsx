import React from 'react';
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import {RecipesData} from "@/app/Data/RecipesData";
import RecipeCard from "@/app/home/components/recipes/RecipeCard";

export default function Recipes() {
    return (
        <>
            <Header/>
            <main className="grid grid-cols-4 gap-4">
                {
                    RecipesData.slice(0, 16).map((recipe: RecipeDataType) =>
                        <RecipeCard key={recipe.id} {...recipe}/>
                    )
                }
            </main>
            <Footer/>
        </>
    );
}