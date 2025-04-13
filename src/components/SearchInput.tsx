import Search from "../assets/search.svg"

export default function SearchInput(){
    return (
        <div className="w-full max-w-[503px] has-[input:focus]:ring-2 has-[input:focus]:ring-blue-400 rounded-[10px] bg-white border-1 border-[#DDDDDD] flex justify-between gap-2 text-black">
            <input type="text" placeholder="Digite um usuário do Github" className="w-full text-xl p-4 focus:outline-0 font-semibold placeholder:text-black" />
            <button className="bg-[#005CFF] h-[62px] w-[62px] rounded-[10px] shrink-0 cursor-pointer flex items-center justify-center">
                <img className="h-[25] w-[25] object-contain" src={Search} alt="Pesquisar" />
            </button>
        </div>
    )
}