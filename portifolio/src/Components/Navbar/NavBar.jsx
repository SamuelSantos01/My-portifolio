import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import { TiThMenu } from "react-icons/ti"
import { IoClose } from "react-icons/io5"

const Navbar = () => {
    const [MenuOpenMobile, setMobileOpenMenu] = useState(false)

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]: bg-background/60 px-4 lg:px-0'>
            <div className='max-w-7xl mx-auto flex h-14 items-center'>
                <div className='md:mr-4 flex justify-between w-full'>
                    <a href='#' className='mr-6 flex items-center space-x-2'>
                        <img src={Logo} alt="Logo" className='w-60' />
                    </a>
                    <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                        <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60 '> Sobre</a>
                        <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60 '> Projetos</a>
                        <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60 '> Contato</a>
                    </nav>
                </div>
                <button className='inline-flex items-center justify-center rounded-md md:hidden' onClick={()=>setMobileOpenMenu(!MenuOpenMobile)}>
                    <span className='sr-only'>Abrir menu</span>
                    {MenuOpenMobile ? (<IoClose className='h-6 w-6' aria-hidden="true"/>) : (<TiThMenu  className='h-6 w-6' aria-hidden="true"/>)}
                </button>
            </div>
            {MenuOpenMobile && (
                <div className='md:hidden'>
                    <div className='space-y-1 px-2 pb-3 pt-2'>
                        <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 hover:text-gray-950'>About</a>
                        <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 hover:text-gray-950'>Projetos</a>
                        <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 hover:text-gray-950'>Contato</a>
                    </div>
                </div>
            )}
        </header>
    )

}

export default Navbar