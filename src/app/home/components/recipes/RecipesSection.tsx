import RecipeCard from "./RecipeCard";
import Title from "@/components/UI/Title";
import Description from "@/components/UI/Description";
import {Recipes} from "@/app/Data/Recipes";
import Image from "next/image";
import React from "react";

export default function RecipesSection() {
    return (
        <section className="mt-20 w-11/12 md:w-4/5 mx-auto">
            <div className="text-center px-4 md:px-0 max-w-4xl mx-auto space-y-6">
                <Title text="Simple and tasty recipes"/>
                <Description
                    text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
                {
                    Recipes.map((recipe: RecipeDataType, index: number) => (
                        <React.Fragment key={recipe.id}>
                            {index === 5 && (
                                <Image
                                    src="/assets/images/recipes/Ads.png"
                                    alt="ADS"
                                    width={400}
                                    height={434}
                                    className="rounded-4xl mx-auto"
                                />
                            )}
                            <RecipeCard
                                image={recipe.image}
                                title={recipe.title}
                                time={recipe.time}
                                category={recipe.category}
                                isLike={recipe.isLike}
                            />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
}

