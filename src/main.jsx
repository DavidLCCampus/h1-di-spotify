import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './components/header'
import { Elementos_imagenes } from './components/elementos-imagenes'
import { Info } from './components/info'
import { Inicio } from './components/inicio'
import { Barra_superior } from './components/barra-superior-desktop'
import { Biblioteca } from './components/biblioteca'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <div className='flex lg:mt-3'>
      <div>
        <Inicio />
        <Biblioteca />
      </div>
      <div className='pl-3 py-3 lg:bg-[#121212] lg:w-full lg:h-[58rem] lg:mx-3 lg:rounded-xl lg:pl-6'>
        <Barra_superior />
        <p className='font-bold text-sm lg:text-xl'>Listas de Spotify</p>
        <div className='flex flex-col gap-12 lg:gap-32'>
          <div className='flex gap-3 mt-4 lg:flex lg:flex-row'>
            <Elementos_imagenes imagen="https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de"
              titulo="Dinner with Friends" />
            <Elementos_imagenes imagen="https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481"
              titulo="Dinner Jazz" />
            <Elementos_imagenes imagen="https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481"
              titulo="Dinner Jazz" />
            {/* <Elementos_imagenes imagen="https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481"
              titulo="Dinner Jazz" /> */}
          </div>
          <div className='flex flex-col gap-10 lg:flex lg:flex-row justify-between'>
            <Info />
          </div>
        </div>
      </div>
    </div>


  </>
)
