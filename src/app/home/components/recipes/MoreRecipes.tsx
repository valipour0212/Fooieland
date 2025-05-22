import Title from "@/components/UI/Title";
import Description from "@/components/UI/Description";
import {MoreRecipesData} from "@/app/Data/Recipes";
import RecipeCard from "@/app/home/components/recipes/RecipeCard";
import {JSX} from "react";

export default function MoreRecipes(): JSX.Element {
    return (
        <div className="mt-20 w-11/12 md:w-4/5 mx-auto">
            {/* عنوان و توضیح */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-x-10">
                <Title text="Try this delicious recipeto make your day"/>
                <div className="max-w-xl text-center md:text-left">
                    <Description
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                </div>
            </div>

            {/* گرید کارت‌ها */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
                {
                    MoreRecipesData.map((recipe: RecipeDataType) => (
                        <RecipeCard
                            key={recipe.id}
                            image={recipe.image}
                            title={recipe.title}
                            time={recipe.time}
                            category={recipe.category}
                            isLike={recipe.isLike}
                        />
                    ))
                }
            </div>
        </div>
    );
}
