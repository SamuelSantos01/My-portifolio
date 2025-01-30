import React from 'react'
import Portfolio from '../../assets/Portifolio2.png'
import Cliente from '../../assets/CadastroDeCliente.png'

import Cards from '../Card.jsx'

export default function Projects() {
    const projectJson = [
        {
            title: 'Portfolio',
            desc: 'Aprensetação profissional',
            image: Portfolio,
            github: "https://github.com/SamuelSantos01/My-portifolio"
        },
        {
            title: 'Cadastro de clientes',
            desc: 'API para cadastro de clientes, desenvolvida para praticar meus conhecimentos em desenvolvimento front-end e back-end.',
            image: Cliente,
            github: "#"
        }
    ];

    return (
        <section id='projects' className='relative bg-gray-900 py-10 px-4'>
            <div className='mb-16 max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>Projetos</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
                    {projectJson.map((items) => {
                        return <Cards item={items} />
                    })}
                </div>
            </div>
        </section>
    )
}