import React from "react";

interface InputFieldProps {
    label: string;
    placeholder: string;
    type?: string;
}

export default function InputField({ label, placeholder, type = "text" }: InputFieldProps) {
    return (
        <div className="flex flex-col space-y-2">
            <label className="font-medium text-[12px] opacity-60">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="font-normal text-sm opacity-60 border border-gray-300 rounded-2xl p-4 h-14 w-full"
            />
        </div>
    );
}
