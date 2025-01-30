import React from 'react'
import Github from '../assets/Github.png'

export default function CardHabilidade({ item }) {
    return (
        <div className=' rounded-lg w-[50px] lg:w-[60px] bg-white p-1'>
            <img src={item.image} alt="" className='rounded-lg w-full h-auto' />
        </div>
    )
}