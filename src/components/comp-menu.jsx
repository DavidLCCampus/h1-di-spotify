import React from 'react'
import ReactDOM from 'react-dom/client'
import { Elementos_menu } from './elementos-menu'

export function Menu() {
    return (
        <div >
            <div className='flex justify-end px-4 py-2'>
                {/*de momento*/}
                <a className='' href='index.html'>X</a>
            </div>
            <div className='mx-10 my-5'>
                <div className='flex flex-col space-y-4'>
                    <a className='text-xl font-bold active:text-gray-400' href="#">Iniciar sesión</a>
                    <a className='text-xl font-bold active:text-gray-400' href="#">Regístrate</a>
                </div>
                <hr className='w-3 my-7' />
                <div className='flex flex-col space-y-2'>
                    <Elementos_menu titulo="Premiun" />
                    <Elementos_menu titulo="Ayuda" />
                    <Elementos_menu titulo="Descargar" />
                </div>
            </div>
        </div>
    )
}