import React from 'react'
import ReactDOM from 'react-dom/client'

export function Elementos_imagenes({ imagen, titulo }) {
    return (
        <div>
            <img className='w-30 h-30 rounded-md' src={`${imagen}`} alt="" />
            <p className='text-sm mt-1'>{titulo}</p>
        </div>
    )
}