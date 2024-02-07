import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Botones_google } from './components/botones-google'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <div className='flex flex-col items-center h-screen justify-center gap-16'>
            <h1 className='text-3xl text-center'>Regístrate en Spotify</h1>
            <form className='flex flex-col gap-3'>
                <label htmlFor="correo">Correo electrónico o usuario</label>
                <input className='border borde-white bg-[#181818] py-3 px-3 rounded-md lg:px-20' type="text" placeholder='Correo electrónico' id='correo' />
            </form>
            <button className='bg-[#1FDF64] text-black py-3 px-20 lg:px-36  rounded-full -mt-7'>
                <a href="#">Siguiente</a>
            </button>
            <div className='flex flex-col gap-2 text-md '>
                <Botones_google link="www.google.com" titulo="Continuar con Google" />
                <Botones_google link="www.google.com" titulo="Continuar con Facebook" />
                <Botones_google link="www.google.com" titulo="Continuar con Apple" />
            </div>
        </div>
    </>
)
