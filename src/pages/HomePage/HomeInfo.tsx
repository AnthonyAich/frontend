import React from 'react'

export default function HomeInfo(props: any) {
  return (
    <>
    <h4 className='text-primary text-3xl font-bold mb-7 mt-16 '>Voordelen van het platform.</h4>
    <div className="lg:grid grid-cols-3 gap-14 mb-24">
        <article className="bg-white rounded-md py-10 my-4 px-7 border-2 border-primary">
            <h5 className='text-primary text-xl font-bold'>Gratis voor studenten.</h5>
            <p className='text-gray-500 text-lg mt-3'>
                Voor studenten die niet verbonden zijn aan een klassikale opleiding is het platform gratis.
            </p>
        </article>
        <article className="bg-white rounded-md py-10 my-4 px-7 border-2 border-primary">
            <h5 className='text-primary text-xl font-bold'>Individuele monitoring.</h5>
            <p className='text-gray-500 text-lg mt-3'>
                Voor klassikale opleidingen is het mogelijk voor de leerkracht om de voortgang van de studenten op te volgen.
            </p>
        </article>
        <article className="bg-white rounded-md py-10 px-7 my-4 border-2 border-primary">
            <h5 className='text-primary text-xl font-bold'>Opdrachten en testen.</h5>
            <p className='text-gray-500 text-lg mt-3'> 
                Na elk hoofdstuk zijn er opdrachten en testen beschikbaar om uw verworven kennis te testen.
            </p>
        </article>
    </div>
    </>
  )
}
