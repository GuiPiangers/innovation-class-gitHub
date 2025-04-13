import { ReactNode } from "react"

function Circle1(){
    return (
    <div className={`h-[888px] w-[888px] bg-[url(./assets/ellipse.png)] bg-contain bg-center absolute -top-[268px] -right-[254px] -z-1`} />
    )
}
function Circle2(){
    return (
        <div className={`h-[674px] w-[674px] bg-[url(./assets/ellipse.png)] bg-contain bg-center absolute -bottom-[100px] left-[calc((337px+84px)*-1)] -z-1`} />
    )
}
function Squad(){
    return (
        <div className="relative h-[537px]">
            <div className={`h-[225px] w-[239px] bg-[url(./assets/squad.png)] bg-contain bg-center absolute -top-[109px] -left-[70px] -z-1`} />
        </div>
    )
}

export default function Background({ children }: {children: ReactNode}){
    return(
        <div className="relative w-full flex justify-center items-center h-screen overflow-hidden">
            <Squad />
            <Circle1 />
            <Circle2 />
            {children}
        </div>
    )
}