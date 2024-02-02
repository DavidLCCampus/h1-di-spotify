import React from 'react'
import ReactDOM from 'react-dom/client'

export function Barra_superior() {
    return (
        <div className='hidden md:flex md:justify-end items-center gap-7 p-5 md:text-[#878787]'>

            <button href="#">Premium</button>
            <button href="#">Asistencia</button>
            <button href="#">Descargar</button>
            |
            <div className='md:flex text-lg gap-5'>
                <button href="#">Registrarte</button>
                <button href="#" className='bg-white px-7 py-2 rounded-full text-slate-900 hover:bg-gray-200
                transition-colors'>Iniciar sesión</button>
            </div>

        </div>
    )
}