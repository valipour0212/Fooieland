import {RecipesData} from "@/app/Data/RecipesData";

export function getRecipeById(id: number):RecipeDataType | undefined {
    return RecipesData.find(recipe => recipe.id === id);
}