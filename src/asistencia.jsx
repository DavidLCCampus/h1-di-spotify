import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        {/* <div className='flex flex-col items-center lg:mt-32 justify-center gap-10'>
        <h1 className='lg:text-4xl font-bold'>¿En qué podemos ayudarte?</h1>
        <h1 className='lg:text-2xl '>Inicia sesión y te podremos ayudar antes</h1>
        <div className='mt-10'>
            <div className='bg-white w-96 p-2 rounded-md '>
                <p className='text-slate-900'>Buscar</p>
            </div>
            <div className=''>

            </div>
        </div>
    </div> */}

        <div className='mx-3  lg:flex mt-20'>
            <div className='grid grid-cols-1 gap-14 mx-auto lg:w-4/12'>
                <h1 className='text-2xl lg:text-4xl'>¿En qué podemos ayudarte?</h1>
                <div className="grid gap-5 lg:gap-10">
                    <h1 className='text-lg lg:text-2xl font-bold text-gray-300'>
                        <a className='underline font-bold text-white' href="login.html">Iniciar sesión</a> y te podremos ayudar antes
                    </h1>
                    <input type="text" placeholder="Buscar" className='py-3 rounded-md text-slate-900 placeholder:' />
                    <div className='grid gap-3'>
                        <div className='flex gap-3'>
                            <TarjetaAsistenciaRosa claseColor="bg-pink-500" texto="Ayuda con los pagos" />
                            <TarjetaAsistenciaRosa claseColor="bg-blue-500" texto="Ayuda con la cuenta" />
                        </div>
                        <div className='flex gap-3'>
                            <TarjetaAsistenciaRosa claseColor="bg-red-700" texto="Ayuda con el plan" />
                            <TarjetaAsistenciaRosa claseColor="bg-orange-500" texto="Ayuda con la aplicación" />
                        </div>
                        <div className='flex gap-3'>
                            <TarjetaAsistenciaRosa claseColor="bg-green-700" texto="Ayuda con el dispositivo" />
                            <TarjetaAsistenciaRosa claseColor="bg-gray-600" texto="Seguridad y privacidad" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
)



function TarjetaAsistenciaRosa({ claseColor, texto }) {
    return (
        <div className={`${claseColor}  rounded-lg w-full h-24 p-4`}>
            <h3 className="text-white text-md font-bold">{texto}</h3>
        </div>
    );
}

