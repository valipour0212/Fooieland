import React from "react";
import Title from "@/components/UI/Title";
import Image from "next/image";
import InputField from "@/components/UI/InputField";
import SelectField from "@/components/UI/SelectField";
import TextareaField from "@/components/UI/TextareaField";
import BlackButton from "@/components/UI/BlackButton";

export default function ContactForm() {
    return (
        <div className="flex flex-col items-center my-20 px-4">
            <Title text="Contact us"/>
            <div className="flex flex-col lg:flex-row gap-10 my-20 w-full max-w-screen-xl">
                <div className="flex justify-center">
                    <Image
                        src="/assets/images/contact.png"
                        alt="Contact"
                        width={400}
                        height={472}
                        className="rounded-4xl max-w-full h-auto"
                    />
                </div>

                <form className="w-full lg:w-[840px] grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="NAME" placeholder="Enter your name..."/>
                    <InputField label="EMAIL ADDRESS" placeholder="Your email address..."/>
                    <InputField label="SUBJECT" placeholder="Enter subject..."/>
                    <SelectField label="SUBJECT" options={["OPTION 1", "OPTION 2", "OPTION 3", "OPTION 4"]}/>
                    <div className="md:col-span-2">
                        <TextareaField label="MESSAGE"/>
                    </div>
                    <div className="md:col-span-2">
                        <BlackButton text="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
