"use client";

import { TypeAnimation } from 'react-type-animation'
import Header from './components/Header';
import Image from 'next/image';
import useAppData from './data/hook/useAppData';
import  { FirebaseIcon, HtmlIcon, JavascriptIcon, NextIcon, ReactIcon, TailwindIcon, TypescriptIcon, CssIcon, GitIcon, GithubIcon, WhatssappIcon, InstagramIcon, LinkedinIcon, EmailIcon, JobIcon, BookIcon, PcIcon, Phone } from './components/icons';
import {motion} from 'framer-motion'
import { animate, stagger } from "framer-motion"
import { ComponentType, useEffect, useRef, useState, SVGProps, JSX } from 'react';
import { splitText } from "motion-plus"
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import  { ProjectItem1, ProjectItem3, projectItem2 } from './components/ProjectItem';
import { register } from "swiper/element/bundle";
import { Toaster } from 'sonner';
import { toast } from "sonner"


register();

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { useRouter } from 'next/navigation';
import BotaoVisitarProjeto from './components/BotaoVisitarProjeto';
import EmailForm from './components/EmailForm';
import { useMediaQuery } from 'react-responsive';



type IconItem = {
  key: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

type projectsType = {
  id: number
  Item: () => JSX.Element;
}



export default function Home() {

  const initialOrder: IconItem[] = [
    {key: "Html", Icon: HtmlIcon}, 
    {key: "Javascript", Icon: JavascriptIcon},
    {key: "Next", Icon: NextIcon},
    {key: "React", Icon: ReactIcon}, 
    {key: "Typescript", Icon: TypescriptIcon}, 
    {key: "CSS", Icon: CssIcon},
    {key: "Tailwind", Icon: TailwindIcon},
    {key: "Firebase", Icon: FirebaseIcon},
    {key: "Git", Icon: GitIcon},
    {key: "Github", Icon: GithubIcon}
  ]


  const projects: projectsType[] = [
    {id: 1, Item: ProjectItem1},
    {id: 2, Item: projectItem2},
    {id: 3, Item: ProjectItem3},
  ]


  const steps = [
    {
      icon: JobIcon,
      title: "Primeiro emprego",
      year: "2022",
      type: "trabalho",
      description: "Primeiro emprego na área de TI como aprendiz na empresa Berneck S.A Painéis e Serrados"
    },
    {
      icon: JobIcon,
      title: "Estágio programação",
      year: "2022",
      type: "trabalho",
      description: "Estágio de 6 meses na parte de front-end de uma empresa desenvolvedora de plataformas web"
    },
    {
      icon: BookIcon,
      title: "Início Faculdade",
      year: "2023",
      type: "estudo",
      description: "Início da faculdade de Ciência da Computação no Centro Universitário Unifacvest"
    },
    {
      icon: JobIcon,
      title: "Mudança de emprego",
      year: "2023",
      type: "trabalho",
      description: "Novo emprego como Analista de TI na empresa DB/SA Móveis e Eletrodomésticos"
    },
    {
      icon: PcIcon,
      title: "Curso Front-End",
      year: "2024",
      type: "estudo",
      description: `Conclusão do curso "Formação Front-End - HTML CSS Javascript React e +" da empresa Hora de Codar`
    },
    {
      icon: PcIcon,
      title: "Curso Next e React",
      year: "2025",
      type: "estudo",
      description: `Conclusão do curso "Next.js e React - Curso Completo - Aprenda com Projetos" da empresa Cod3r`
    }
  ]


  const { tema } = useAppData()
  const [order, setOrder] = useState<IconItem[]>(initialOrder)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [openForm, setOpenForm] = useState(false)
  const router = useRouter()
  
  const isMobile = useMediaQuery({ maxWidth: 640 })

  
  const containerRef = useRef<HTMLDivElement>(null)

  function shuffle<T>([...array]: T[]): T[] {
    return array.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    router.push("/")
  }, [])


  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000)
    return () => clearTimeout(timeout)
  }, [order])

  
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 150,
    mass: 1.5
  }

  useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            containerRef.current.style.visibility = "visible"

            const { words } = splitText(
                containerRef.current.querySelector("p")!
            )

            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,  
                    delay: stagger(0.05),
                }
            )
        })
    }, [])


  function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 420px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
      )
  }

  async function sendEmail(){
    if(name === "" || email === "" || message === ""){
      toast("Preencha todos os campos do formulário!!", {
        unstyled: true,
        className: "bg-yellow-500 text-white px-4 py-3 rounded"
      })

      return 
    }

    const templateForm = {
      name: name,
      email: email,
      message: message
    }


    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(templateForm)
    })

    if(res.ok){
      setName('')
      setEmail('')
      setMessage('')

      setOpenForm(false)

      toast("Email enviado com sucesso!!", {
        unstyled: true,
        className: "bg-green-600 text-white px-4 py-3 rounded"
      })

    }

  }

  function closeForm(){
    setOpenForm(false)
  }



  return (
    <div>
      <Header/>
      <main className={`
        ${tema}
        flex flex-col
        min-h-screen dark:bg-gray-800
        bg-gray-500
      `}
      >
        <section id="about" className="h-screen items-center gap-5 pt-10 flex flex-col sm:flex-row justify-center sm:items-start sm:pt-50 sm:gap-20">
          <div className='flex text-start flex-col w-[90%] sm:w-150 text-yellow-300' ref={containerRef}>
            <TypeAnimation
              sequence={[
                'Olá, me chamo Ryan Lucas Karpen!',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl text-center sm:text-start sm:text-3xl"
              repeat={Infinity}
            />
            <br />
            <p className=' text-white text-justify leading-relaxed text-md sm:text-lg'>
               Sou estudante de Ciência da Computação e um apaixonado por programação.
               Esse portifólio é um espaço onde compartilho um pouco daquilo que venho aprendendo
               e desenvolvendo na área da tecnologia.
            </p>
            <BotaoVisitarProjeto url='/curriculo-Ryan.pdf' label='Baixar Currículo'/>
            <Stylesheet/>
          </div>
          <Image
            src='/images/fotodePerfil.jpeg'
            alt='imagemperfil'
            width={300}
            height={200}
            className='rounded-full'
          />
        </section>
        <section
          id='technologies'
          className='min-h-screen flex flex-col items-center pt-20 sm:pt-30'
          >
          <motion.div
            className='flex flex-col'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className='text-3xl sm:text-4xl text-center text-yellow-300'>Tecnologias e skills</h2>
            <div className='flex items-center sm:items-start flex-col sm:flex-row gap-20 mt-10'>
              <motion.ul className="
                flex flex-row flex-wrap gap-[10px] justify-center items-center
                w-[400px] sm:w-[550px] list-none p-0 relative
              ">
                {order.map(({ key, Icon }) => (
                  <motion.li
                    key={key}
                    layout
                    transition={{ type: "spring", damping: 10, stiffness: 100, mass: 1 }}
                    className="
                      flex rounded-[10px] flex-col justify-center items-center
                      shadow-[0_2px_6px_rgba(0,0,0,0.1)] bg-zinc-700
                      w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] p-2 sm:p-0
                    "
                  >
                    <Icon width={100} height={100}/>
                    <p className='text-sm sm:text-md'>{key}</p>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p 
                className='w-[90%] pr-5 pl-5 sm:pl-0 sm:pr-0 sm:w-200 text-md sm:text-lg'
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                O meu primeiro contato com programação foi no início da faculdade em 2023 e desde então, venho me aprofundando
                e procurando evoluir cada vez mais nessa área tão vasta e apaixonante. Desde o início meu foco se voltou para
                o <span className='text-yellow-300'>Desenvolvimento Web</span>, principalmente a parte de <span className='text-yellow-300'>Front-end</span>, pois acho incrível o conceito de transformar ideias
                em experiências únicas.<br></br><br></br>As tecnologias que venho estudando e performando estão baseadas na biblioteca React, juntamente
                com o framework Next e a tipagem do Typescript.
              </motion.p>
            </div>
          </motion.div>
        </section>
        <section id='timeLine' className='min-h-screen sm:overflow-x-auto px-4 mt-30 sm:mt-0'>
          <h2 className='text-3xl sm:text-4xl text-yellow-300 text-center'>Minha Trajetória</h2>
          <div className='flex justify-center'>
            <div className='flex flex-col sm:flex-row space-y-12 sm:space-x-12 items-center sm:items-start w-max px-4 relative mt-10 sm:mt-20'>
              {steps.map((step, index) => (
                <div key={index} className='flex flex-col items-center text-center relative'>
                  {index < steps.length -1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                      className="hidden sm:block absolute top-6 left-1/2 origin-left translate-x-1/2 h-1 w-28 bg-yellow-400 z-0"
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className={`${step.type === 'trabalho' ? 'bg-yellow-400': 'bg-blue-500'} p-4 rounded-full mb-3 shadow-lg`}>
                      {step.icon}
                    </div>
                    <h4 className='text-white text-lg'>{step.title}</h4>
                    <span className='text-sm text-gray-200 dark:text-gray-400 mb-1'>{step.year}</span>
                    <p className='text-sm text-gray-200 max-w-[160px]'>{step.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id='projects' className='h-screen flex flex-col items-center mt-30 sm:mt-0'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className='text-3xl sm:text-4xl text-yellow-300 text-center'>Meus Projetos</h2>
            <Swiper
              slidesPerView={1}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  spaceBetween: 36,
                }
              }}
              speed={1000}
              className="min-h-[500px] max-w-[90vw] sm:min-h-[600px] sm:max-w-screen"
            >
              {projects.map((project) => {
                const ProjectComponent = project.Item
                return(
                  <SwiperSlide key={project.id}>
                    <ProjectComponent/>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </motion.div>
        </section>
        <section id='contact' className="h-screen sm:w-screen flex flex-col relative sm:flex-row sm:pt-30 sm:mt-30 gap-10 sm:gap-0">
          <motion.div 
            initial={{ opacity:isMobile ? 1 : 0, y: isMobile ? 0 : -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`
              ${tema}
              sm:w-1/2 flex flex-col sm:items-end sm:pr-10 sm:border-r-1 dark:border-gray-500 px-4 border-gray-300 
            `}
          >
            <div className='sm:mt-10'>
              <h2 className='text-3xl sm:text-3xl text-yellow-300 text-center sm:text-start'>Entre em contato</h2>
              <p className='mt-5'>Estou aberto a oportunidades, fale comigo através de:</p>
              {!openForm && (
                <button className='flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 text-white px-2 py-1 sm:px-4 sm:py-2 sm:w-[200px] rounded cursor-pointer mt-5 sm:mt-10' onClick={() => setOpenForm(true)}>
                  {EmailIcon} 
                  <p>Envie um email</p>
                </button>
              )}
              {openForm && (
                <motion.div
                  initial={{ opacity: isMobile ? 1 : 0, x: isMobile ? 0 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className= "sm:relative absolute -bottom-10 left-1/2 transform -translate-x-1/2"
                >
                  <EmailForm closeForm={closeForm} sendEmail={sendEmail} setEmail={setEmail} setName={setName} setMessage={setMessage} name={name} email={email} message={message}/>
                </motion.div>
              )}
            </div>
          </motion.div>
          <div className='flex flex-col sm:w-1/2 sm:items-start sm:ml-10 px-4 mt-10 sm:mt-0'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='sm:mt-40'
            >
              <span className='flex gap-5 items-center'>
                <h2 className='text-lg sm:text-2xl'>Redes sociais</h2>
                {Phone}
              </span>
              <ul className='flex gap-5 mt-5'>
                <li className='flex flex-col items-center'>
                  <a href="https://wa.me/5549991670736" target='_black'>
                    <WhatssappIcon className='sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]'/>
                  </a>
                  <span className='text-sm sm:text-lg'>Whatsapp</span>
                </li>
                <li className='flex flex-col items-center'>
                  <a href="https://www.instagram.com/ryankarpen/" target='_blank'>
                    <InstagramIcon className='sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]'/>
                  </a>
                  <span>Instagram</span>
                </li>
                <li className='flex flex-col items-center'>
                  <a href="https://www.linkedin.com/in/ryan-lucas-karpen" target='_blank'>
                    <LinkedinIcon className='sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-full'/>
                  </a>
                  <span>Linkedin</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
        <footer className={`
              ${tema}
              flex justify-center pl-5 sm:px-0 py-5 sm:py-10 border-t-1 border-gray-300 dark:border-gray-500 text-sm sm:text-lg mt-50
          `}>
          <p>© 2025 Ryan Lucas Karpen. Todos os direitos reservados.</p>
        </footer>
      </main>
      <Toaster richColors position="top-right" className='bg-green-600'/>
    </div>
  );
}
