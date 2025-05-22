import React from 'react';
import Image from "next/image";
import Title from "@/components/UI/Title";
import Description from "@/components/UI/Description";
import BlackButton from "@/components/UI/BlackButton";

export default function SubscribeCard() {
    return (
        <div className="hidden md:flex w-11/12 md:w-4/5 mt-40 mx-auto relative">
            {/* بک‌گراند تصویری */}
            <Image
                src="/assets/images/SubscribeCard.png"
                alt="SubscribeCard"
                width={1280}
                height={442}
                className="rounded-3xl w-full object-cover"
            />

            {/* محتوای روی تصویر */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-3 mx-auto w-[155px] sm:w-[310px] md:w-[620px]">
                <Title text="Deliciousness to your inbox"/>
                <Description
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

                <div className="bg-white rounded-3xl flex sm:flex-row justify-between items-center p-4 gap-4">
                    <input
                        type="email"
                        placeholder="Your email address..."
                        className="w-full px-4 py-3 outline-none focus:outline-none"
                    />
                    <BlackButton text="Subscribe" width={150}/>
                </div>
            </div>
        </div>
    );
}
