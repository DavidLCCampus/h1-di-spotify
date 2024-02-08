import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Botones_google } from './components/botones-google'
import { CabeceraSpotify } from './components/cabecera-spotify'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <CabeceraSpotify />
        <div className='mx-8 mt-5'>
            <div className='grid grid-cols-1 mx-auto gap-8'>
                <h1 className='font-bold text-2xl lg:text-4xl text-center'>Iniciar sesión en Spotify</h1>
                <div className='grid gap-3'>
                    <Botones_google link="https://www.google.com" titulo="Continuar con Google" />
                    <Botones_google link="https://www.facebook.com" titulo="Continuar con Facebook" />
                    <Botones_google link="https://www.apple.com" titulo="Continuar con Apple" />
                </div>
                <hr className='border-gray-600' />
                <div className='grid gap-3'>
                    <input className='py-3 rounded-md border border-gray-300 bg-[#181818]
                    placeholder:text-gray-400 placeholder:pl-3'
                        type="text" placeholder='Correo electrónico o usuario' />
                    <input type="text" className='placeholder:pl-3 placeholder:text-gray-400 
                    py-3 rounded-md bg-[#181818] border border-gray-300 ' placeholder='Contraseña' />
                </div>
                <button className='bg-[#1FDF64] text-slate-900 rounded-full py-3'>
                    <a className='text-lg font-bold' href="#">Iniciar sesión</a>
                </button>
                <hr className='border-gray-600' />
                <h1 className='text-neutral-500 text-center -mt-3'>¿No tienes cuenta? <a className='text-white underline font-bold' href='register.html'>Regístrate.</a></h1>
            </div>
        </div>

    </>
)
