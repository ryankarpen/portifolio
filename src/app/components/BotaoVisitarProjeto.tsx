type BotaoVisitarProjetoType = {
    url: string,
    label: string
}

export default function BotaoVisitarProjeto(props: BotaoVisitarProjetoType){
    return(
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 text-white px-4 py-2 rounded cursor-pointer mt-5 sm:mt-10">
                {props.label}
            </button>
         </a>
    )
}