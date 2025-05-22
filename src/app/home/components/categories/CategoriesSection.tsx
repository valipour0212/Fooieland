import CategoryCard from "./CategoryCard";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import {JSX} from "react";
import {Categories} from "@/app/Data/Categories";

export default function CategoriesSection(): JSX.Element {
    return (
        <section className="mt-20 sm:mt-32 lg:mt-40 w-11/12 sm:w-4/5 mx-auto">

            <div className="flex justify-between items-center mb-10">
                <Title text="Categories"/>
                <Button text="View All Categories"/>
            </div>

            <div className="flex justify-between gap-x-4 sm:gap-x-6">
                {
                    Categories.map((category: CategoriesDataType): JSX.Element =>
                        <CategoryCard
                            key={category.title}
                            title={category.title}
                            image={category.image}
                            href={category.href}
                            gradient={category.gradient}
                        />
                    )
                }
            </div>

        </section>
    )
}