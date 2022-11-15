import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import errorImage from '../../images/Error.svg';
import { NavBar } from '../../utils/NavBar/NavBar';

//functional component typescript
export default function Error404(props: any) {

    useEffect(() => {
        document.title = "anthoStudy - Error 404";
    }, []);

    return (
        <>
        <NavBar />
        <div>
            <img src={errorImage} alt="error" className='mt-48 mx-auto w-1/4' />
            <h1 className='text-5xl text-center font-bold mt-14'>Error 404 </h1>
            <h2 className='text-2xl text-center font-bold mt-0 text-gray-500'>
                De pagina die u probeert te bezoeken bestaat niet.
            </h2>
            <div className="mx-auto flex justify-center">
                <Link to="/dashboard">
                    <button className="bg-primary hover:bg-grey-500 text-white font-bold py-2 px-4 rounded mt-10 border-2 border-primary hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl transition-all ">
                        Terug naar de homepagina
                    </button>
                </Link>
            </div>
        </div>
        </>
    )
}
