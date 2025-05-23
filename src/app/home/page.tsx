import Header from "@/components/UI/Header";
import FeaturedRecipes from "@/app/home/components/recipes/FeaturedRecipes";
import CategoriesSection from "@/app/home/components/categories/CategoriesSection";
import RecipesSection from "@/app/home/components/recipes/RecipesSection";
import LearnMore from "@/app/home/components/LearnMore";
import InstagramSection from "@/app/home/components/instagram/InstagramSection";
import MoreRecipes from "@/app/home/components/recipes/MoreRecipes";
import SubscribeCard from "@/components/UI/SubscribeCard";
import Footer from "@/components/UI/Footer";

export default function HomePage() {

    return (
        <>
            <Header/>
            <FeaturedRecipes/>
            <CategoriesSection/>
            <RecipesSection/>
            <LearnMore/>
            <InstagramSection/>
            <MoreRecipes/>
            <SubscribeCard/>
            <Footer/>
        </>
    );
}
