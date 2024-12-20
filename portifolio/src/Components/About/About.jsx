import React from 'react'
import Html from '../../assets/Html.png'
import Css from '../../assets/CSS.png'
import Javascript from '../../assets/JS.png'
import ReactLogo from '../../assets/React.png'
import Tailwind from '../../assets/Tailwind Css.png'
import NodeLogo from '../../assets/NodeLogo.png'
import JavaLogo from '../../assets/logo-java-256.png'
import MysqlLogo from '../../assets/mysql.png'

export default function About() {
    return (
        <div className='relative' id='about'>
            <div className='bg-blue-500 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-black font-semibold tracking-wide uppercase'>   Sobre</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Olá, eu sou Samuel Teixeira</p>

                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>Jornada</h3>
                                <p className='mt-4 text-lg text-black'>
                                    Comecei minha jornada no desenvolvimento de software assim que entrei na faculdade. Escolhi essa área porque sempre tive o desejo de criar soluções para problemas do mundo real e enxerguei uma grande oportunidade no desenvolvimento de software. Desenvolvi projetos pessoais que refletem minha dedicação ao aprendizado e minha habilidade em desenvolvimento. Atualmente, estou em busca do meu primeiro estágio para aplicar e expandir meus conhecimentos.
                                </p>
                            </div>
                            <div className='bg-blue-500 border border-white rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-white'>
                                <h3 className='text-2xl font-semibold text-black'>Habilidades e experiência</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white'>
                                        <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind Css</span>
                                    </div>
                                    <div className='border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white'>
                                        <img src={NodeLogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Node Js</span>
                                    </div>
                                    <div className='border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white'>
                                        <img src={JavaLogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Java</span>
                                    </div>
                                    <div className='border border-white flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-white'>
                                        <img src={MysqlLogo} alt="" className='w-10' />
                                        <span className='font-semibold'>MySQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}