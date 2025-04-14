import gitHub from '../assets/gitHub.svg'
import gitHubText from '../assets/gitHubText.svg'

export default function Logo(){
    return (
        <div className="flex gap-[11px] min-h-[82px] items-center flex-wrap justify-center">
            <img className="h-10 sm:w-[58px] w-10 sm:h-[58px] object-contain" src={gitHub} alt="GitHub" />
            <span className="font-semibold text-5xl sm:text-6xl text-white">Perfil</span>
            <img className="h-10 sm:h-[45px] w-32 sm:w-40 object-contain" src={gitHubText} alt="GitHub Text" />
        </div>
    )
}