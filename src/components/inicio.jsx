import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomeSVG, SearchSVG, SpotifySVG } from '../assets/iconosSVG'


export function Inicio() {
    return (
        <div className='hidden lg:flex lg:flex-col bg-[#121212] w-96 ml-3 h-40 rounded-xl p-7  space-y-2'>
            <div className='flex gap-2'>
                <SpotifySVG />
                <p className='text-white'>Spotify</p>
            </div>
            <div className='flex gap-2'>
                <HomeSVG />
                <a className='hover:text-white text-gray-400' href='#'>Inicio</a>
            </div>
            <div className='flex gap-2'>
                <SearchSVG />
                <a className='hover:text-white text-gray-400' href='#'>Buscar</a>
            </div>
        </div>
    )
}