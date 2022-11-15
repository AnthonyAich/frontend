import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import programmingImage from '../../images/PairProgramming.svg';
import HomeInfo from './HomeInfo';
import { NavBar } from '../../utils/NavBar/NavBar';

export default function HomePagina() {
    
    const [coockieVisible, setCoockieVisible] = useState("visible");

    const coockieClick = () => {
        setCoockieVisible("hidden");
    }
    
    useEffect(() => {
        document.title = 'anthoStudy - Home';
    }, []);

  return (
    <>
        <NavBar />
        <div className="mx-5 lg:mx-72">
          <img src={programmingImage} alt="programming" className='mt-48 mx-auto w-1/3' />
          <h1 className='text-3xl text-center font-black mt-9'>Digitaal leerplatform.</h1>
          <h2 className='text-xl text-center font-medium text-gray-500'>
              anthoStudy is een digitaal leerplatform die je helpt bij het leren van allerlei onderwerpen 🎓
          </h2>
          <div className="mx-auto flex justify-center">
              <Link to="/login">
                  <button className="bg-primary w-32 hover:bg-grey-500 text-white font-bold py-2 px-4 rounded mt-10 border-2 border-primary hover:-translate-y-1 hover:translate-x-1 hover:shadow-2xl transition-all ">
                      Inloggen
                  </button>
              </Link>
              <Link to="/register">
                  <button className=" text-primary w-32 border-2 border-primary font-bold py-2 px-4 rounded mt-10 ml-2 hover:-translate-y-1 hover:translate-x-1 hover:shadow-2xl transition-all ">
                      Registreren
                  </button>
              </Link>
          </div>
          <HomeInfo />
        </div>
        <footer className='bg-primary text-white'>
            <div className=" lg:mx-72 mt-20 py-12">
                <div className="flex justify-between">
                    <h1 className='text-white text-3xl'>
                        anthoStudy
                    </h1>
                    <div className="flex text-white">
                        Gemaakt met veel liefde door <a target="_blank" rel='noreferrer' href="https://github.com/AnthonyAich" className='text-white font-bold pl-1'> Anthony Aichouche</a>.
                    </div>
                </div>
            </div>
        </footer>
        {/* coockie box */}
        <div className={`fixed bottom-2 lg:left-2 w-full lg:w-96 bg-white border-2 border-primary rounded-md p-4 lg:hoverAnimation ${coockieVisible}`}>
            <div className="mb-2">
                <h1 className='text-2xl font-bold flex justify-between'>Cookies 🍪 <button onClick={() => {coockieClick()}} className="text-6xl font-bold leading-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button></h1>

            </div>
            <p className='text-gray-500'>
                Naast het gebruik van cookies voor het functioneren van de website, gebruiken we ook cookies om uw ervaring te verbeteren.
            </p>
            <div className="flex justify-start mt-4">
                <button onClick={() => {coockieClick()}} className="bg-primary text-white font-bold py-2 px-4 rounded">
                    Accepteren
                </button>
                <button onClick={() => {coockieClick()}} className="text-primary font-bold py-2 px-4 rounded ml-2">
                    Weigeren
                </button>
            </div>
        </div>
    </>
  )
}
