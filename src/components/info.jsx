import React from 'react'
import ReactDOM from 'react-dom/client'
import { InstagramSVG } from '../assets/iconosSVG'
export function Info() {
    return (
        <>
            <div className='flex flex-col gap-7  md:flex md:flex-row md:gap-16 '>

                <div className='flex flex-col gap-2 '>
                    <p className='text-sm'>Empresa</p>
                    <p className='text-sm text-[#878787]'>Acerca de</p>
                    <p className='text-sm text-[#878787]'>Empleo</p>
                    <p className='text-sm text-[#878787]'>For the record</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm'>Comunidades</p>
                    <p className='text-sm text-[#878787]'>Para artistas</p>
                    <p className='text-sm text-[#878787]'>Desarrolladores</p>
                    <p className='text-sm text-[#878787]'>Publicidad</p>
                    <p className='text-sm text-[#878787]'>Inversores</p>
                    <p className='text-sm text-[#878787]'>Proveedores</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm'>Enlaces útiles</p>
                    <p className='text-sm text-[#878787]'>Asistencia</p>
                    <p className='text-sm text-[#878787]'>App gratis para móvil</p>
                </div>
            </div>
            <div className='flex gap-3 md:mr-7 '>
                <div className='p-2 bg-[#181818] md:bg-[#2b2b2b] rounded-full h-8'>
                    <InstagramSVG />
                </div>
                <div className='p-2 bg-[#181818] md:bg-[#2b2b2b] rounded-full h-8'>
                    <InstagramSVG />
                </div>
                <div className='p-2 bg-[#181818] md:bg-[#2b2b2b] rounded-full h-8'>
                    <InstagramSVG />
                </div>
            </div>
        </>
    )
}