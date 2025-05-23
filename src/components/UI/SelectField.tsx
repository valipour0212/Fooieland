import React from "react";

interface SelectFieldProps {
    label: string;
    options: string[];
}

export default function SelectField({ label, options }: SelectFieldProps) {
    return (
        <div className="flex flex-col space-y-2">
            <label className="font-medium text-[12px] opacity-60">{label}</label>
            <select className="font-normal text-sm opacity-60 border border-gray-300 rounded-2xl p-4 h-14 w-full">
                {options.map((option, idx) => (
                    <option key={idx} value={option.toLowerCase()}>{option}</option>
                ))}
            </select>
        </div>
    );
}
