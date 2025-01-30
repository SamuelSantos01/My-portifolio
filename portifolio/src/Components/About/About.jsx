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
            <div className='bg-[v] py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-black font-semibold tracking-wide uppercase'>Sobre</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Olá, eu sou Samuel Teixeira</p>

                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>Carreira</h3>
                                <p className='mt-4 text-lg text-black'>
                                    Sou um desenvolvedor full stack com expertise em criar soluções completas e escaláveis, integrando tanto o desenvolvimento back-end quanto front-end. Minha jornada na área de tecnologia começou durante a faculdade, onde descobri minha paixão por transformar ideias em produtos funcionais e impactantes.
                                    <br />
                                    Ao longo da minha trajetória, tenho me dedicado ao aprimoramento contínuo das minhas habilidades, desenvolvendo projetos que abrangem desde a construção de APIs robustas e arquitetura de banco de dados até interfaces de usuário intuitivas e responsivas. Utilizo tecnologias modernas como inserir tecnologias relevantes, por exemplo: React, Node.js, Python, Docker, etc. para entregar aplicações de alta performance e qualidade.
                                    <br />
                                    Minha abordagem combina atenção aos detalhes, pensamento crítico e uma forte capacidade de resolver problemas, sempre visando entregar soluções que atendam às necessidades dos usuários e dos negócios. Estou sempre em busca de novos desafios que me permitam expandir meus conhecimentos e contribuir para projetos inovadores.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}