import React from 'react'
import ReactDOM from 'react-dom/client'


export function Inicio() {
    return (
        <div className='hidden md:flex md:flex-col bg-[#121212] w-96 h-40 rounded-xl p-7  space-y-2'>
            <p className='text-white'>Spotify</p>
            <a className='text-white' href='#'>Inicio</a>
            <a className='text-white' href='#'>Buscar</a>
        </div>
    )
}