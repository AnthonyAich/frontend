// about function component typescript
import React, {useEffect} from 'react';
import aboutImage from '../../images/FAQ.svg';
import { NavBar } from '../../utils/NavBar/NavBar';

export default function About(props: any) {

    useEffect(() => {
        document.title = "anthoStudy - About";
    }, []);

    return (
        <>
        <NavBar />
        <div className="mx-72 ">
            <h1 className='text-5xl font-bold mt-40'>About.</h1>
            <h2 className='text-xl font-bold mt-3 text-gray-500'>
                Hier wat informatie over de website.
            </h2>
            <div className="flex">
                <article>
                    <h1 className='text-3xl font-bold mt-9'>Wat is anthoStudy?</h1>
                    <p className='text-xl font-bold mt-3 text-gray-500'>
                        anthoStudy is een digitaal leerplatform die je helpt bij het leren van verschillende onderwerpen.
                    </p>
                </article>
                <img src={aboutImage} alt="about" className='mt-9 mx-auto w-1/4' />
            </div>
        </div>
        </>
    );
    }