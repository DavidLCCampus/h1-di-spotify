import React from 'react'
import ReactDOM from 'react-dom/client'
import { SpotifySVG } from '../assets/iconosSVG'

export function CabeceraSpotify() {
    return (
        <div className='text-white flex mt-7 ml-5 gap-2 lg:ml-16'>
            <span><SpotifySVG /></span>
            <a href='index.html' className='font-bold text-lg lg:text-xl'>Spotify</a>
        </div>
    )
}