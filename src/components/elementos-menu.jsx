import React from 'react'
import ReactDOM from 'react-dom/client'

export function Elementos_menu({ titulo }) {
    return (
        <>
            <a className='active:text-gray-400' href="#">{titulo}</a>
        </>
    )
}