import React from "react";

interface TextareaFieldProps {
    label: string;
}

export default function TextareaField({ label }: TextareaFieldProps) {
    return (
        <div className="flex flex-col space-y-2">
            <label className="font-medium text-[12px] opacity-60">{label}</label>
            <textarea
                className="w-full h-52 font-normal text-sm opacity-60 border border-gray-300 rounded-2xl p-4 resize-none"
            />
        </div>
    );
}
