import React from 'react'
import ReactDOM from 'react-dom/client'


export function Botones_google({ link, titulo }) {
    return (
        <button className='border border-white px-10 py-2 lg:px-20 rounded-full hover:bg-white hover:text-slate-900 transition-colors '>

            <a href={`${link}`}>{titulo}</a>
        </button>
    )
}