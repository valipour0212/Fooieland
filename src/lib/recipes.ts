import {RecipesData} from "@/app/Data/RecipesData";

export function getRecipeById(id: number) {
    return RecipesData.find(recipe => recipe.id === id);
}