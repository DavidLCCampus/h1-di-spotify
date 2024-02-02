import React from 'react'
import ReactDOM from 'react-dom/client'

export function Elementos_imagenes({ imagen, titulo }) {
    return (
        <div className='bg-[#181818] p-4 rounded-xl hover:bg-[#272727] transition-colors'>
            <img className='w-30 h-30 rounded-md md:w-28 md:h-28 ' src={`${imagen}`} alt="" />
            <p className='text-sm mt-1 w-20'>{titulo}</p>
        </div>
    )
}