import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CabeceraSpotify } from './components/cabecera-spotify.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <CabeceraSpotify />
        {/* <div className='lg:mt-52  lg:items-center flex flex-col lg:gap-9'>
            <h1 className='lg:text-4xl '>Prueba Premium gratis durante dos meses</h1>
            <h1 className='lg:text-2xl'>Disfruta de música sin anuncios y sin interrupciones cuando quieras y en cualquier parte.</h1>
            <div className='flex lg:gap-4 '>
                <button className='py-3 lg:px-32 text-slate-900 bg-[#FFD2D7] hover:bg-[#FFEBEE] transition-colors
                rounded-full font-bold'>Probar gratis durante 2 meses</button>
                <button className='py-3 lg:px-32 border-2 border-white bg-black rounded-full font-bold'>Ver todos los planes Premium</button>
            </div>
        </div> */}

        <div className='flex justify-center mx-3'>
            <div className='grid grid-cols-1 mt-20 gap-3 justify-center items-center '>
                <h1 className='text-2xl font-bold'>Prueba Premium gratis durante dos meses</h1>
                <h1>Disfruta de música sin anuncios y sin interrupciones cuando quieras y en cualquier parte.</h1>
                <div className='grid justify-center'>
                    <button className='py-2 px-4 bg-[#FFD2D7] rounded-full w-full text-slate-900
                    hover:bg-[#FFEBEE] transition-colors'>
                        Probar gratis durante 2 meses
                    </button>
                </div>
            </div>
        </div>

    </>
)
