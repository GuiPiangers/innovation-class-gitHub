import { ReactNode } from "react";

export default function Card({children}: {children?: ReactNode}){
    return (
        <div className="min-h-[537px] w-full max-w-[1156px] bg-black p-10 flex flex-col items-center">
            {children}
        </div>
    )
}