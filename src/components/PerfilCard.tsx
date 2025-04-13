export default function PerfilCard(){
    return(
        <div className="rounded-[25px] w-full items-center max-w-[804px] bg-[#D9D9D9] px-[33px] py-[18px] flex gap-8">
            <img className="shrink-0 object-cover object-center h-[220px] w-[220px] rounded-full border-2 border-[#005CFF]" src="" alt="Perfil" />
        
            <div className="flex flex-col gap-4"> 
                <h2 className="text-xl text-[#005CFF] font-bold">Lucas Mendes</h2>
                <p >Desenvolvedor front-end apaixonado por criar interfaces intuitivas e acessíveis. Especialista em UX/UI e e-commerces, transformando design em código eficiente. Sempre explorando novas tecnologias para melhorar a experiência do usuário. 🚀</p>
            </div>
        </div>
    )
}