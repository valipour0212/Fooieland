import React from 'react';

interface RecipeDetailsProps {
    params: { id: string };
}

export default async function RecipeDetails({ params }: RecipeDetailsProps) {
    const { id } = params;
    // fetch data here using your API helper
    // const recipe = await fetchRecipeById(id);

    return (
        <main>
            {/* نمایش اطلاعات دستور غذا */}
            <h1>Recipe Details for {id}</h1>
        </main>
    );
}
