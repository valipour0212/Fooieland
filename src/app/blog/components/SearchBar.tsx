import React from "react";
import BlackButton from "@/components/UI/BlackButton";

export default function SearchBar() {
    return (
        <div className="flex items-center border border-gray-300 rounded-3xl p-3 w-full max-w-2xl mx-auto">
            <input
                type="search"
                placeholder="Search article, news or recipe..."
                className="w-full focus:outline-none text-sm text-gray-600"
            />
            <BlackButton text="Search" width={180} />
        </div>
    );
}
