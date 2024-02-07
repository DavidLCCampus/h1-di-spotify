import React from 'react'
import ReactDOM from 'react-dom/client'

export function Barra_superior() {
    return (
        <div className='hidden lg:flex lg:justify-end items-center gap-7 p-5 lg:text-[#878787]'>

            <button className='hover:text-slate-300 transition-colors'>
                <a href="premium.html">Premium</a>
            </button>
            <button className='hover:text-slate-300 transition-colors'>
                <a href="asistencia.html">Asistencia</a>
            </button>
            <button className='hover:text-slate-300 transition-colors'>Descargar</button>
            |
            <div className='md:flex text-lg gap-5'>
                <button className='hover:text-slate-300 transition-colors'>
                    <a href="register.html">Registrarte</a>
                </button>
                <button className='bg-white px-7 py-2 rounded-full text-slate-900 hover:bg-gray-200
                transition-colors'>
                    <a href="login.html">Iniciar Sesión</a>
                </button>
            </div>

        </div>
    )
}