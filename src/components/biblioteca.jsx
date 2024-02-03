import React from 'react'
import ReactDOM from 'react-dom/client'


export function Biblioteca() {
    return (
        <div className='hidden lg:flex lg:flex-col bg-[#121212] mt-3 w-96 ml-3 h-[754px] rounded-xl '>
            <a className='hover:text-white text-gray-400 p-7'>Tu biblioteca</a>
            <div className='bg-[#202020] w-79 pl-4 m-2 h-36 rounded-md'>
                <p className='mt-4'>Crea tu primera lista</p>
                <p className='text-sm mt-1'>Es muy fácil, y te echaremos una mano.</p>
                <button className='mt-5 hover:bg-[#878787] transition-colors bg-white text-slate-900 rounded-full py-1 px-4 text-md'>
                    <a href="#">Crear lista</a>
                </button>
            </div>
            <div className='bg-[#202020] w-79 pl-4 m-2 h-36 rounded-md'>
                <p className='mt-4'>Encuentra pódcasts que quieras seguir</p>
                <p className='text-sm mt-1'>Te avisaremos cuando salgan nuevos episodios.</p>
                <button className='mt-5 hover:bg-[#878787] transition-colors bg-white text-slate-900 rounded-full py-1 px-4 text-md'>
                    <a href="#">Explorar podcasts</a>
                </button>
            </div>
        </div>
    )
}