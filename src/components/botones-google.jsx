import React from 'react'
import ReactDOM from 'react-dom/client'


export function Botones_google({ link, titulo }) {
    return (
        <button className='border border-white px-10 py-3 lg:px-20 rounded-full hover:bg-white  transition-colors '>

            <a className='font-bold text-gray-200 hover:text-slate-900' href={`${link}`}>{titulo}</a>
        </button>
    )
}