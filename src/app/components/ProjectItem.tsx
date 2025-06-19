"use client";
import {motion} from 'framer-motion'
import BotaoVisitarProjeto from './BotaoVisitarProjeto';
import { FirebaseIcon, NextIcon, ReactIcon, TailwindIcon } from './icons';


export function ProjectItem1(){
    return(
        <motion.div 
          className='pl-5 sm:p-0 flex flex-col sm:flex-row sm:mt-10 justify-center gap-10 sm:gap-20'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className='flex flex-col gap-10'>
            <motion.img
              src="/images/projetoTemplateAdmin.png"
              width={500}
              height={500}
              whileHover={{ scale: 1.1 }}
              className="hidden sm:block rounded-lg"
            >
            </motion.img>
            <motion.img
                src='/images/projetoTemplateAdmin2.png'
                alt='imagemperfil'
                width={500}
                height={500}
                whileHover={{ scale: 1.1 }}
                className="hidden sm:block rounded-lg"
            >
            
            </motion.img>
          </div>
            <div className='flex flex-col'>
              <h1 className='text-lg text-yellow-300'>Template Admin</h1>
              <p className='w-full sm:w-[600px] sm:text-lg mt-10'>
                Plataforma que simula um sistema de login utilizando Next e autenticação com o Firebase. O usuário
                poderá fazer login através de usuário e senha ou com sua conta do google.
                Escolhi desenvolver esse projeto pois poderei utilizar os conhecimentos adquiridos como base para outros
                trabalhos que utilizem sistemas de login.
              </p>
              <div className='flex mt-5 gap-3'>
                <ReactIcon className='w-[50px] h-[30px] sm:w-[70px] sm:h-[50px] border-neutral-300 rounded-2xl bg-neutral-100'/>
                <NextIcon className='w-[50px] h-[30px] sm:w-[70px] sm:h-[50px] border-neutral-300 rounded-2xl bg-neutral-100' color='white'/>
                <TailwindIcon className='w-[50px] h-[30px] sm:w-[70px] sm:h-[50px] border-neutral-300 rounded-2xl bg-neutral-100'/>
                <FirebaseIcon className='w-[50px] h-[30px] sm:w-[70px] sm:h-[50px] border-neutral-300 rounded-2xl bg-neutral-100'/>
              </div>
              <div className='flex gap-5'>
                <BotaoVisitarProjeto url="https://template-admin.netlify.app/autenticacao" label='Visitar Projeto'/>
                <BotaoVisitarProjeto url='https://github.com/ryankarpen/admin-template' label="Github"/>
              </div>
            </div>
        </motion.div>
    )
}

export function projectItem2(){
  return(
    <motion.div 
          className='pl-5 sm:p-0 flex flex-col sm:flex-row sm:mt-10 justify-center gap-10 sm:gap-20'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className='flex flex-col gap-10'>
            <motion.img
              src="/images/projetoNextCrud.png"
              width={500}
              height={500}
              whileHover={{ scale: 1.1 }}
              className="hidden sm:block rounded-lg"
            >
            </motion.img>
            <motion.img
                src="/images/projetoNextCrud1.png"
                alt='imagemperfil'
                width={500}
                height={500}
                whileHover={{ scale: 1.1 }}
                className="hidden sm:block rounded-lg"
            >
            
            </motion.img>
          </div>
            <div className='flex flex-col'>
              <h1 className='text-lg text-yellow-300'>Next Crud</h1>
              <p className='w-full sm:w-[600px] sm:text-lg mt-10'>
                Projeto que simula uma plataforma de cadastro CRUD (create, read, update, delete) de pessoas, onde o 
                usuário poderá persistir, acessar e atualizar os dados cadastrais através da integração com o Firestore 
                do Firebase. Decidi realizar esse projeto pois poderei utilizar os conceitos como base para outras aplicações 
                CRUD.
              </p>
              <div className='flex mt-5 gap-3'>
                <ReactIcon className='w-[50px] h-[30px] sm:w-[70px] sm:h-[50px] border-neutral-300 rounded-2xl bg-neutral-100'/>
                <NextIcon className='w-[50px] h-[30px] sm:w-[70px] sm:h-[50px] border-neutral-300 rounded-2xl bg-neutral-100' color='white'/>
                <TailwindIcon className='w-[50px] h-[30px] sm:w-[70px] sm:h-[50px] border-neutral-300 rounded-2xl bg-neutral-100'/>
                <FirebaseIcon className='w-[50px] h-[30px] sm:w-[70px] sm:h-[50px] border-neutral-300 rounded-2xl bg-neutral-100'/>
              </div>
              <div className='flex gap-5'>
                <BotaoVisitarProjeto url="https://nextcrudproject.netlify.app/" label='Visitar Projeto'/>
                <BotaoVisitarProjeto url='https://github.com/ryankarpen/next-crud' label="Github"/>
              </div>
            </div>
        </motion.div>
  )
}


export function ProjectItem3(){
    return(
        <motion.div 
          className='pl-5 sm:p-0 flex flex-col sm:flex-row sm:mt-10 justify-center gap-10 sm:gap-20'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className='flex flex-col gap-10'>
            <motion.img
              src="/images/projetoPortaPremiada2.png"
              width={500}
              height={500}
              whileHover={{ scale: 1.1 }}
              className="hidden sm:block rounded-lg"
            >
            </motion.img>
            <motion.img
                src='/images/projetoPortaPremiada.png'
                alt='imagemperfil'
                width={500}
                height={500}
                whileHover={{ scale: 1.1 }}
                className="hidden sm:block rounded-lg"
            >
            
            </motion.img>
          </div>
            <div className='flex flex-col'>
              <h1 className='text-lg text-yellow-300'>Monty Hall</h1>
              <p className='w-full sm:w-[600px] sm:text-lg mt-10'>
                Projeto que simula um jogo onde o player deverá adivinhar qual das portas é a premiada. 
                O mesmo terá o direito de escolher a quantidade de portas totais e quantas portas irão possuir surpresa.
                Decidi fazer esse projeto, pois o mesmo utiliza conceitos de React/Next e permite ter uma ideia de utilização 
                do context, muito útil em diversos outros trabalhos.
              </p>
              <div className='flex mt-5 gap-3'>
                <ReactIcon className='w-[50px] h-[30px] sm:w-[70px] sm:h-[50px] border-neutral-300 rounded-2xl bg-neutral-100'/>
                <NextIcon className='w-[50px] h-[30px] sm:w-[70px] sm:h-[50px] border-neutral-300 rounded-2xl bg-neutral-100' color='white'/>
              </div>
              <div className='flex gap-5'>
                <BotaoVisitarProjeto url="https://awardwinningdoor.netlify.app/" label='Visitar Projeto'/>
                <BotaoVisitarProjeto url='https://github.com/ryankarpen/portaPremiada' label="Github"/>
              </div>
            </div>
        </motion.div>
    )
}


