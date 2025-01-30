import React from 'react'
import Html from '../../assets/Html.png'
import Css  from '../../assets/css.png'
import Github from '../../assets/Github.png'
import Js from '../../assets/JS.png'
import Java from '../../assets/logo-java-256.png'
import Mysql from '../../assets/mysql.png'
import Reactlogo from '../../assets/React.png'
import NodeJs from '../../assets/NodeLogo.png'
import Python from '../../assets/python.png'
import CLogo from '../../assets/letra-c.png'
import Git from '../../assets/git.png'


import Cards from '../CardHabilidade'

export default function Habilidades() {
    const projectJson = [
        {
            title: 'HTML',
            image: Html
        },
        {
            title: 'CSS',
            image: Css
        },
        {
            title: 'Github',
            image: Github
        },
        {
            title: 'JavaScript',
            image: Js
        },
        {
            title: 'JAVA',
            image: Java
        },
        {
            title: 'Mysql',
            image: Mysql
        },
        {
            title: 'ReactLogo',
            image: Reactlogo
        },
        {
            title: 'NodeJS',
            image: NodeJs
        },
        {
            title: 'Python',
            image: Python
        },
        {
            title: 'C',
            image: CLogo
        },
        {
            title: "Git",
            image: Git
        }
        
    ];

    return (
        <section id='projects' className='relative bg-gray-900 py-10 px-4'>
    <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>Habilidades</h2>
        <div className='grid grid-cols-4 lg:grid-cols-9 place-items-center gap-10 gap-x-1'>
            {projectJson.map((items) => {
                return (
                    <div className='flex justify-center items-center'>
                        <Cards item={items} />
                    </div>
                );
            })}
        </div>
    </div>
</section>

    
    )
}