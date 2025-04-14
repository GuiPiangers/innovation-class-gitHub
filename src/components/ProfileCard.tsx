import Card from "./Card";

type ProfileCardProps = {
    name: string;
    avatarUrl: string;
    bio: string;
}

export default function ProfileCard({avatarUrl, name, bio}: ProfileCardProps){
    return(
        <Card>
            <img 
                className="shrink-0 object-cover object-center h-[220px] w-[220px] rounded-full border-2 border-[#005CFF]" 
                src={avatarUrl} 
                alt="Perfil" 
            />
        
            <div className="flex flex-col gap-4"> 
                <h2 className="text-xl text-[#005CFF] font-bold">
                    {name}
                </h2>
                <p>{bio}</p>
            </div>
        </Card>
    )
}