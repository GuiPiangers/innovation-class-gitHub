import { ReactNode } from "react";

export default function Card({children, className}: {children?: ReactNode; className?: string}){
    return (
        <div className={`flex rounded-[25px] w-full items-center max-w-[804px] bg-[#D9D9D9] px-[33px] py-[18px] gap-8 ${className}`}>
            {children}
        </div>
    )
}