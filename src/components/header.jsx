import React from 'react'
import ReactDOM from 'react-dom/client'

export function Header() {
    return (
        <header className='bg-black md:hidden'>
            <div className='flex px-3 h-11 items-center justify-between'>
                <p>logo</p>
                <div className='flex gap-3 justify-end '>
                    <p>buscar</p>
                    <button className='bg-white text-black rounded-full h-7 px-3 items-center '>
                        <a className='text-xs font-bold' href="#">Abrir en la aplicación</a>
                    </button>
                    <a href="menu.html">menu</a>
                </div>
            </div>
        </header>
    )
}