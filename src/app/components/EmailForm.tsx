import { useState } from "react"
import { CloseIcon } from "./icons"

interface EmailFormProps {
    sendEmail: () => void
    name: string
    email: string
    message: string
    closeForm: () => void
    setName: (name: string) => void
    setEmail: (email: string) => void
    setMessage: (message: string) => void
}

export default function EmailForm(props: EmailFormProps){


    return(
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            props.sendEmail()
        }} className="flex flex-col border border-white/20 shadow-lg rounded-lg h-[350px] w-[380px] sm:h-[400px] sm:w-[500px] p-4 backdrop-blur-sm bg-gradient-to-br from-blue-800/70 via-blue-700/60 to-blue-900/70">
            <div onClick={props.closeForm} className="flex justify-center w-[30px] self-end cursor-pointer">
                {CloseIcon}
            </div>
            <label htmlFor="name">Nome</label>
            <input value={props.name} type="text" id="name" name="name" className="focus:shadow-lg shadow-cyan-500 rounded-md p-1 sm:p-2 outline-none bg-gray-400 focus:bg-gray-300 text-black" onChange={(e) => props.setName(e.target.value)}/><br />
            <label htmlFor="email">Email</label>
            <input value={props.email} type="email" id="email" name="email" className="focus:shadow-lg shadow-cyan-500 bg-gray-400 rounded-md p-1 sm:p-2 outline-none focus:bg-gray-300 text-black" onChange={(e) => props.setEmail(e.target.value)}/><br />
            <label htmlFor="message">Mensagem</label>
            <textarea value={props.message} rows={10} cols={35} name="message" id="message" className="focus:shadow-lg shadow-cyan-500 bg-gray-400 rounded-md p-1 sm:p-2 outline-none focus:bg-gray-300 text-black" onChange={(e) => props.setMessage(e.target.value)}></textarea><br />
            <input type="submit" value="Enviar" className="cursor-pointer border-2 bg-gradient-to-r from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded sm:w-[100px] self-end border-none"/>
        </form>
    )
}