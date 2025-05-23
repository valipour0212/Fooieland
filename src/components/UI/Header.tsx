"use client"
import Link from 'next/link';
import React, {JSX, useState} from 'react';
import Image from "next/image";
import {Navigation} from "@/app/Data/Navigation";
import {Social} from "@/app/Data/Social";
import {Menu, X} from "lucide-react";

export default function Header(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 md:px-6 py-10 flex justify-between items-center">
                {/* Logo */}
                <Link href={"/"}>
                    <Image src="/assets/images/LOGO.png" alt="Home" width={110} height={30} className="cursor-pointer"/>
                </Link>

                {/* Mobile menu toggle button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>

                {/* Desktop navigation menu */}
                <nav className="hidden md:flex md:items-center md:space-x-10 text-gray-700 font-medium">
                    {
                        Navigation.map((item: navigationType) =>
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-orange-500 transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        )
                    }
                </nav>

                {/* Desktop social media icons */}
                <div className="hidden md:flex items-center space-x-6">
                    {
                        Social.map((item, index) =>
                            <Link href={item.href} key={index} target="_blank">
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

            {/* Mobile navigation menu */}
            {isMenuOpen &&
                <div className="md:hidden px-4 pb-4">
                    <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
                        {
                            Navigation.map((item: navigationType) =>
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-orange-500 transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        }
                    </nav>

                    <div className="flex mt-4 space-x-4">
                        {
                            Social.map((item, index) =>
                                <Link href={item.href} key={index} target="_blank">
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
            }
        </header>
    );
}
