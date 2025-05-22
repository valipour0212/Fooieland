import React, {JSX} from 'react';
import Title from "@/components/UI/Title";
import Description from "@/components/UI/Description";
import InstagramCard from "@/app/home/components/instagram/InstagramCard";
import {Instagram} from "@/app/Data/Instagram";
import BlackButton from "@/components/UI/BlackButton";

export default function InstagramSection(): JSX.Element {
    return (
        <div className="bg-gradient-to-t from-[#E7F9FD] to-transparent mt-20 sm:mt-40">
            <div className="w-11/12 sm:w-4/5 mx-auto py-20">
                <div className="max-w-[840px] mx-auto space-y-6 text-center md:text-left">
                    <Title text="Check out @foodieland on Instagram"/>
                    <Description
                        text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20">
                    {
                        Instagram.map((instagram: InstagramDataType) => (
                            <InstagramCard key={instagram.id} image={instagram.image}/>
                        ))
                    }
                </div>
                <div className="flex justify-center md:justify-start">
                    <BlackButton text="Visit Our Instagram" icon="/assets/images/04-instagram.png" width={230}/>
                </div>
            </div>
        </div>
    );
}