"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

interface AppContextProps {
    tema?: string
    alterarTema?: () => void
}

interface AppProviderProps {
    children: ReactNode
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: AppProviderProps){

    const [tema, setTema] = useState('dark')

    function alterarTema(){
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo ?? 'dark')
    }, [])

    return(
        <AppContext.Provider value={{
            tema, 
            alterarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext