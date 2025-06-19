"use client";

import useAppData from "../data/hook/useAppData"
import BotaoAlterarTema from "./BotaoAlterarTema";
import { DevIcon } from "./icons";
import * as motion from 'motion/react-client'


export default function Header(){

    const {tema, alterarTema} = useAppData()

    return(
        <aside className={`
            ${tema}
            sm:h-25 flex items-center justify-center gap-10 sm:gap-0 sm:justify-around px-5 sm:text-xl
            text-white bg-gray-500 dark:text-white dark:bg-gray-900
        `}>
            <motion.div
                className="hidden sm:block"
                animate={{
                    rotate: [0, 0, 360],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            >
                {DevIcon}
            </motion.div>
            <ul className="flex items-center h-20 gap-7">
                <li className="hover:text-yellow-300"><a href="#about">SOBRE</a></li>
                <li className="hover:text-yellow-300"><a href="#projects">PROJETOS</a></li>
                <li className="hover:text-yellow-300"><a href="#contact">CONTATO</a></li>
            </ul>
            <BotaoAlterarTema tema={tema} alterarTema={alterarTema}/>
        </aside>
    )
}