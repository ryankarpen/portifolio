import { MoonIcon, SunIcon } from "./icons"

interface BotaoAlterarTemaProps {
    tema: string | undefined 
    alterarTema?: () => void
}

export default function BotaoAlterarTema(props: BotaoAlterarTemaProps){
    return props.tema === 'dark' ? (
        <div onClick={props.alterarTema} className="
            flex itens-center cursor-pointer
            bg-gradient-to-r from-yellow-300 to bg-yellow-600
            w-14 lg:w-24 h-8 p-1 rounded-full
        ">
            <div className="
                flex items-center justify-center
                bg-white text-yellow-600 w-6 h-6 rounded-full
            ">
                {SunIcon}
            </div>
            <div className="
                hidden lg:flex items-center ml-4
                text-white
            ">
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alterarTema} className="
            flex itens-center cursor-pointer
            bg-gradient-to-r from-gray-500 to bg-gray-900
            w-14 lg:w-24 h-8 p-1 rounded-full
        ">
            <div className="
                hidden lg:flex items-center ml-4
                text-white
            ">
                <span className="text-sm">Escuro</span>
            </div>
            <div className="
                flex items-center justify-center
                bg-black text-yellow-300 w-6 h-6 rounded-full
            ">
                {MoonIcon}
            </div>
        </div>
    )
}