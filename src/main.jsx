import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './components/header'
import { Elementos_imagenes } from './components/elementos-imagenes'
import { Info } from './components/info'
import { Inicio } from './components/inicio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <div className='flex'>
      <div>
        <Inicio />
      </div>
      <div className='px-3 py-3'>
        <p className='font-bold text-sm'>Listas de Spotify</p>
        <div className='flex flex-col gap-12'>
          <div className='flex gap-3 mt-4'>
            <Elementos_imagenes imagen="https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de"
              titulo="Dinner with Friends" />
            <Elementos_imagenes imagen="https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481"
              titulo="Dinner Jazz" />
            <Elementos_imagenes imagen="https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481"
              titulo="Dinner Jazz" />
            <Elementos_imagenes imagen="https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481"
              titulo="Dinner Jazz" />
          </div>
          <Info />
        </div>
      </div>
    </div>


  </>
)
