import React from 'react'
import ReactDOM from 'react-dom/client'
import { Elementos_main } from './elementos-main'
export function Info() {
    return (
        <>
            <div className='flex flex-col gap-2'>
                <p className='text-sm'>Empresa</p>
                <Elementos_main titulo="Acerca de" />
                <Elementos_main titulo="Empleo" />
                <Elementos_main titulo="For the Record" />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-sm'>Comunidades</p>
                <Elementos_main titulo="Para artistas" />
                <Elementos_main titulo="Desarrolladores" />
                <Elementos_main titulo="Publicidad" />
                <Elementos_main titulo="Inversores" />
                <Elementos_main titulo="Proveedores" />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-sm'>Enlaces útiles</p>
                <Elementos_main titulo="Asistencia " />
                <Elementos_main titulo="App gratis para móvil" />
            </div>
        </>
    )
}