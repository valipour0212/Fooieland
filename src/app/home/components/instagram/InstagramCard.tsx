import React from "react";
import Image from "next/image";

export default function InstagramCard({ image }: InstagramCardPropsType) {
    return (
        <div className="bg-white rounded-xl shadow-sm w-full max-w-xs mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center px-3 py-2">
                <div className="flex space-x-3 items-center">
                    <Image
                        src="/assets/images/instagram/Oval.png"
                        alt="Profile"
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <div className="text-left">
                        <div className="flex items-center space-x-1">
                            <span className="text-xs font-semibold">Foodieland.</span>
                            <Image
                                src="/assets/images/instagram/Shape.png"
                                alt="Verified"
                                width={8}
                                height={8}
                            />
                        </div>
                        <span className="text-[8px] text-gray-500">Tokyo, Japan</span>
                    </div>
                </div>
                <Image
                    src="/assets/images/instagram/MoreIcon.png"
                    alt="More options"
                    width={12}
                    height={12}
                />
            </div>

            {/* Post Image */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-b-xl overflow-hidden">
                <Image
                    src={image}
                    alt="Post"
                    fill
                    className="object-cover rounded-b-xl"
                />
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center px-3 py-2">
                <div className="flex space-x-4">
                    <Image src="/assets/images/instagram/Like.png" alt="Like" width={18} height={16} />
                    <Image src="/assets/images/instagram/Comment.png" alt="Comment" width={17} height={17} />
                    <Image src="/assets/images/instagram/Messanger.png" alt="Share" width={18} height={16} />
                </div>
                <Image src="/assets/images/instagram/Pagination.png" alt="Pagination" width={20} height={5} />
                <Image src="/assets/images/instagram/Save.png" alt="Save" width={15} height={18} />
            </div>

            {/* Likes */}
            <div className="flex items-center px-3 space-x-2">
                <Image src="/assets/images/instagram/Oval2.png" alt="Like Profile" width={14} height={14} />
                <span className="text-[10px] text-gray-800">
                    Liked by <span className="font-semibold">craig_love</span> and{" "}
                    <span className="font-semibold">44,686 others</span>
                </span>
            </div>

            {/* Caption */}
            <div className="px-3 py-1">
                <span className="text-[10px] text-gray-800">
                    <span className="font-bold">Foodieland. </span>
                    The vegetables dishes need to have certain vitamin for those people
                </span>
            </div>

            {/* Date */}
            <div className="px-3 pb-3">
                <span className="text-[8px] text-gray-500">September 19</span>
            </div>
        </div>
    );
}
