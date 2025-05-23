"use client"
import {useState} from "react";
import {notFound} from "next/navigation";
import {getRecipeById} from "@/lib/recipes";
import Header from "@/components/UI/Header";
import SubscribeCard from "@/components/UI/SubscribeCard";
import Footer from "@/components/UI/Footer";
import Title from "@/components/UI/Title";
import {RecipesData} from "@/app/Data/RecipesData";
import RecipeCard from "@/app/home/components/recipes/RecipeCard";
import Image from "next/image";


type RecipeDetailsPropsType = {
    params: {
        id: string;
    };
};

export default function RecipeDetailsPage({params}: RecipeDetailsPropsType) {
    const recipeId: number = Number(params.id);
    const recipe: RecipeDataType | undefined = getRecipeById(recipeId);

    const [isChecked, setIsChecked] = useState(false);

    function handleClick(): void {
        setIsChecked(!isChecked)
    }

    if (!recipe) return notFound();

    return (
        <>
            <Header/>
            <main className="mt-20 w-11/12 md:w-4/5 mx-auto">
                {/* Header  */}
                <div className="grid grid-cols-12 my-20">
                    <div className="col-span-12 flex justify-between items-center">
                        <div className="col-span-9">
                            <span className="font-semibold text-6xl">Health Japanese Fried Rice</span>
                            <div className="flex space-x-20 mt-12">
                                <div className="flex space-x-4">
                                    <Image src="/assets/images/Ellipse 2.png" alt="Ellipse" width={50} height={50}/>
                                    <div className="flex flex-col space-y-2">
                                        <span className="font-bold text-[16px]">John Smith</span>
                                        <span className="font-medium text-sm opacity-60">15 March 2022</span>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <Image src="/assets/images/Timer.png" alt="Timer" width={24} height={24}/>
                                    <div className="flex flex-col space-y-2">
                                        <span className="font-bold text-[16px]">PREP TIME</span>
                                        <span className="font-medium text-sm opacity-60">15 Minutes</span>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <Image src="/assets/images/Timer.png" alt="Timer" width={24} height={24}/>
                                    <div className="flex flex-col space-y-2">
                                        <span className="font-bold text-[16px]">COOK TIME</span>
                                        <span className="font-medium text-sm opacity-60">15 Minutes</span>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <Image src="/assets/images/ForkKnife.png" alt="ForkKnife" width={24} height={24}/>
                                    <div className="flex flex-col justify-center space-y-2">
                                        <span className="font-medium text-sm opacity-60">Chicken</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex flex-col items-center space-y-6">
                                <div className="w-20 h-20 rounded-full bg-[#E7FAFE] flex justify-center items-center">
                                    <Image src="/assets/images/printer.png" alt="printer" width={24} height={24}/>
                                </div>
                                <span className="font-medium text-[12px]">PRINT</span>
                            </div>
                            <div className="flex flex-col items-center space-y-6">
                                <div className="w-20 h-20 rounded-full bg-[#E7FAFE] flex justify-center items-center">
                                    <Image src="/assets/images/share.png" alt="share" width={24} height={24}/>
                                </div>
                                <span className="font-medium text-[12px]">SHARE</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between col-span-12 space-x-10 mt-20">
                        {/* Video   */}
                        <Image src="/assets/images/recipes/img-02.png" alt="video" width={840} height={600}
                               className="col-span-9 rounded-4xl w-[840px] h-[600]"/>

                        {/* Nutrition Card */}
                        <div
                            className="col-span-3 w-[400px] h-[600px] bg-[#E7FAFE] rounded-4xl p-8 flex flex-col justify-between">
                            <div className="">
                                <span className="font-semibold text-2xl">Nutrition Information</span>
                                <div className="space-y-4 mt-6">
                                    <div className="flex justify-between border-b-[1px] border-gray-300 space-y-4">
                                        <span className="font-medium text-lg opacity-60">Calories</span>
                                        <span className="font-medium text-lg">219.9 kcal</span>
                                    </div>
                                    <div className="flex justify-between border-b-[1px] border-gray-300 space-y-4">
                                        <span className="font-medium text-lg opacity-60">Total Fat</span>
                                        <span className="font-medium text-lg">10.7 g</span>
                                    </div>
                                    <div className="flex justify-between border-b-[1px] border-gray-300 space-y-4">
                                        <span className="font-medium text-lg opacity-60">Protein</span>
                                        <span className="font-medium text-lg">7.9 g</span>
                                    </div>
                                    <div className="flex justify-between border-b-[1px] border-gray-300 space-y-4">
                                        <span className="font-medium text-lg opacity-60">Carbohydrate</span>
                                        <span className="font-medium text-lg">22.3 g</span>
                                    </div>
                                    <div className="flex justify-between border-b-[1px] border-gray-300 space-y-4">
                                        <span className="font-medium text-lg opacity-60">Cholesterol</span>
                                        <span className="font-medium text-lg">37.4 mg</span>
                                    </div>
                                </div>
                            </div>
                            <span className="font-normal text-[16px] opacity-60">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                        </div>
                    </div>
                    <p className="font-normal text-[16px] text-black opacity-60 col-span-12 mt-20">Lorem ipsum dolor sit
                        amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                </div>

                {/* Cooking Step */}
                <div className="grid grid-cols-12">
                    {/* Ingredients */}
                    <div className="col-span-9">
                        {/* Ingredients */}
                        <div className="flex flex-col">
                            <span className="font-semibold text-4xl">Ingredients</span>
                            <span className="font-semibold text-2xl mt-12">For main dish</span>
                            <div
                                onClick={handleClick}
                                className="flex items-center gap-2 cursor-pointer select-none border-b-[1px] border-black opacity-60 mr-10">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleClick}
                                    className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 checked:bg-black checked:border-black checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center my-8"
                                />
                                <span className={isChecked ? "line-through text-gray-500" : ""}>Lorem ipsum dolor sit amet</span>
                            </div>
                            <div
                                onClick={handleClick}
                                className="flex items-center gap-2 cursor-pointer select-none border-b-[1px] border-black opacity-60 mr-10">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleClick}
                                    className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 checked:bg-black checked:border-black checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center my-8"
                                />
                                <span className={isChecked ? "line-through text-gray-500" : ""}>Lorem ipsum dolor sit amet</span>
                            </div>
                            <div
                                onClick={handleClick}
                                className="flex items-center gap-2 cursor-pointer select-none border-b-[1px] border-black opacity-60 mr-10">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleClick}
                                    className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 checked:bg-black checked:border-black checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center my-8"
                                />
                                <span className={isChecked ? "line-through text-gray-500" : ""}>Lorem ipsum dolor sit amet</span>
                            </div>
                            <div
                                onClick={handleClick}
                                className="flex items-center gap-2 cursor-pointer select-none border-b-[1px] border-black opacity-60 mr-10">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleClick}
                                    className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 checked:bg-black checked:border-black checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center my-8"
                                />
                                <span className={isChecked ? "line-through text-gray-500" : ""}>Lorem ipsum dolor sit amet</span>
                            </div>
                        </div>

                        {/* For the sauce */}
                        <div className="flex flex-col">
                            <span className="font-semibold text-2xl mt-12">For the sauce</span>
                            <div
                                onClick={handleClick}
                                className="flex items-center gap-2 cursor-pointer select-none border-b-[1px] border-black opacity-60 mr-10">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleClick}
                                    className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 checked:bg-black checked:border-black checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center my-8"
                                />
                                <span className={isChecked ? "line-through text-gray-500" : ""}>Lorem ipsum dolor sit amet</span>
                            </div>
                            <div
                                onClick={handleClick}
                                className="flex items-center gap-2 cursor-pointer select-none border-b-[1px] border-black opacity-60 mr-10">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleClick}
                                    className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 checked:bg-black checked:border-black checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center my-8"
                                />
                                <span className={isChecked ? "line-through text-gray-500" : ""}>Lorem ipsum dolor sit amet</span>
                            </div>
                            <div
                                onClick={handleClick}
                                className="flex items-center gap-2 cursor-pointer select-none border-b-[1px] border-black opacity-60 mr-10">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleClick}
                                    className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 checked:bg-black checked:border-black checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center my-8"
                                />
                                <span className={isChecked ? "line-through text-gray-500" : ""}>Lorem ipsum dolor sit amet</span>
                            </div>
                            <div
                                onClick={handleClick}
                                className="flex items-center gap-2 cursor-pointer select-none border-b-[1px] border-black opacity-60 mr-10">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleClick}
                                    className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 checked:bg-black checked:border-black checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center my-8"
                                />
                                <span className={isChecked ? "line-through text-gray-500" : ""}>Lorem ipsum dolor sit amet</span>
                            </div>
                        </div>
                    </div>

                    {/* Ads */}
                    <div className="col-span-3 space-y-20">
                        {/* Other Recipe    */}
                        <div className="">
                            <span className="font-semibold text-3xl">Other Recipe</span>
                            <div className="space-y-6 mt-8">
                                <div className="flex justify-between space-x-4">
                                    <Image
                                        src="/assets/images/recipes/img-01.png"
                                        alt="img"
                                        width={180}
                                        height={120}
                                        className="rounded-4xl"
                                    />
                                    <div className="flex flex-col space-y-4">
                                        <span className="font-semibold text-[20px]">Chicken Meatball with Creamy Chees...</span>
                                        <span className="font-medium text-sm opacity-60">By Andreas Paula</span>
                                    </div>
                                </div>
                                <div className="flex justify-between space-x-4">
                                    <Image
                                        src="/assets/images/recipes/img-01.png"
                                        alt="img"
                                        width={180}
                                        height={120}
                                        className="rounded-4xl"
                                    />
                                    <div className="flex flex-col space-y-4">
                                        <span className="font-semibold text-[20px]">Chicken Meatball with Creamy Chees...</span>
                                        <span className="font-medium text-sm opacity-60">By Andreas Paula</span>
                                    </div>
                                </div>
                                <div className="flex justify-between space-x-4">
                                    <Image
                                        src="/assets/images/recipes/img-01.png"
                                        alt="img"
                                        width={180}
                                        height={120}
                                        className="rounded-4xl"
                                    />
                                    <div className="flex flex-col space-y-4">
                                        <span className="font-semibold text-[20px]">Chicken Meatball with Creamy Chees...</span>
                                        <span className="font-medium text-sm opacity-60">By Andreas Paula</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*ADS*/}
                        <Image src="/assets/images/recipes/Ads.png" alt="Ads" width={400} height={434}/>
                    </div>

                </div>

                {/* Subscribe Card  */}
                <SubscribeCard/>

                {/* Recommendation recipe   */}
                <div className="my-40 text-center">
                    <Title text="You may like these recipe too" className="font-semibold text-4xl"/>
                    <div className="flex justify-between gap-4">
                        {
                            RecipesData.slice(0, 4).map((recipe: RecipeDataType) =>
                                <RecipeCard
                                    key={recipe.id}
                                    id={recipe.id}
                                    image={recipe.image}
                                    title={recipe.title}
                                    time={recipe.time}
                                    category={recipe.category}
                                    isLike={recipe.isLike}
                                />
                            )
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
