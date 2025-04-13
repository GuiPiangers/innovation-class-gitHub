import gitHub from '../assets/gitHub.svg'
import gitHubText from '../assets/gitHubText.svg'

export default function Logo(){
    return (
        <div className="flex gap-[11px] h-[82px] items-center">
            <img className="w-[58px] h-[58px] object-contain" src={gitHub} alt="GitHub" />
            <span className="font-semibold text-6xl text-white">Perfil</span>
            <img className="h-[45px] w-40 object-contain" src={gitHubText} alt="GitHub Text" />
        </div>
    )
}