import React from 'react'
import ReactDOM from 'react-dom/client'
import { MenuSVG, SearchSVG, SpotifySVG } from '../assets/iconosSVG'

export function Header() {
    return (
        <div className='bg-black md:hidden w-full'>
            <div className='flex px-3 h-11 items-center justify-between'>
                <SpotifySVG />
                <div className='flex gap-3 justify-end '>
                    <SearchSVG />
                    <button className='bg-white text-black rounded-full h-7 px-3 items-center '>
                        <a className='text-xs font-bold' href="#">Abrir en la aplicación</a>
                    </button>
                    <a href="menu.html">
                        <MenuSVG />
                    </a>
                </div>
            </div>
        </div>
    )
}