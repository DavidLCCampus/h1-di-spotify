import React from 'react'
import ReactDOM from 'react-dom/client'


export function Botones_google({ link, titulo }) {
    return (
        <button className='border border-white px-10 py-3 lg:px-20 rounded-full text-gray-200 hover:bg-white hover:text-black transition-colors '>

            <a className='font-bold  ' href={`${link}`}>{titulo}</a>
        </button>
    )
}