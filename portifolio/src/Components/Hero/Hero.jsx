import React from 'react'
import Dev from '../../assets/Dev4.png'


const Hero = () => {
    return (
        <section className='w-full bg-gray-100'>
            <div className='max-w-7xl mx-auto '>
                <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
                    <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
                        <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Olá,
                            Eu sou Samuel Teixeira</h1>
                        <p className='md:text-2xl text-xl mb-4'>Desenvolvedor Web/Full Stack</p>
                        <p className='mb-4'>
                            Sou estudante de Engenharia de Software e desenvolvedor web, com conhecimentos em desenvolvimento front-end e back-end, além de experiência na aplicação e utilização de ferramentas e frameworks modernos.
                        </p>
                        <button className='bg-black px-3 py-2 w-max rounded-md'><a href="../../assets/Samuel Teixeira dos Santos.pdf" className="text-white hover:text-gray-900 mx-2" download>Baixar Currículo</a></button>
                    </div>
                    <div className='relative flex justify-center  items-end'>
                        <img src={Dev} alt="" className='lg:h-[90vh]' />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Hero