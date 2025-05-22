import Link from "next/link";
import Image from "next/image";
import Description from "@/components/UI/Description";
import {Navigation} from "@/app/Data/Navigation";
import React from "react";
import {Social} from "@/app/Data/Social";

export default function Footer() {
    return (
        <footer className="mt-40 w-4/5 mx-auto py-12">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
                {/* لوگو و توضیح */}
                <div className="space-y-4 text-center md:text-left">
                    <Image src="/assets/images/LOGO.png" alt="footer" width={110} height={30}/>
                    <Description text="Lorem ipsum dolor sit amet, consectetuipisicing elit,"/>
                </div>

                {/* لینک‌های ناوبری */}
                <nav>
                    <ul className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-20 text-gray-700 font-medium">
                        {
                            Navigation.map((item: navigationType) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-orange-500 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>

            <div className="bg-black opacity-10 w-full h-[1px] my-12"></div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                <div></div>

                <span
                    className="font-medium text-lg text-center md:text-left">© 2020 Flowbase. Powered by Webflow</span>

                {/* آیکون‌های شبکه اجتماعی */}
                <div className="flex items-center space-x-8 mb-6 md:mb-0 justify-center md:justify-start">
                    {
                        Social.map((item, index) =>
                            <Link href={item.href} key={index} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={item.iconURL}
                                    alt={item.href}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 object-contain hover:opacity-70 transition"
                                />
                            </Link>
                        )
                    }
                </div>
            </div>
        </footer>
    );
}
