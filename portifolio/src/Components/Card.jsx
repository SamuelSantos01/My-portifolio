import React from 'react'
import Github from '../assets/Github.png'

export default function Card({ item }) {
    return (
        <div className='border border-white rounded-lg w-[350px] lg:w-[400px] bg-red-50'>
            <img src={item.image} alt="" className='rounded-lg' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <a href={item.github} target='_blank' className='flex gap-1'>
                            <img src={Github} alt="" className='w-6'/>
                            Github Link
                        </a>
                    </button>
                    <button className='bg-red-600 text-white px-3 py-2 rounded-md'>
                        <a href={item.github} target='_blank' className='flex gap-1'>
                            Visualizar projeto
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}