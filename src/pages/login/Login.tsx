import React, { useCallback, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../../hooks/providerHooks/useSession';
import { useLogin } from '../../hooks/providerHooks/useLogin';
import { useForm } from 'react-hook-form';
import { NavBar } from '../../utils/NavBar/NavBar';


export default function Login() {
    const { register, handleSubmit, reset } = useForm();
    const {login, loading, error} = useLogin();
    const { isAuth } = useSession();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate('/dashboard');
        }
    }, [navigate, isAuth]);

    const handleLogin = useCallback(async (props: any) => {
        const loggedIn = await login(props.email, props.password);
        
        if (loggedIn) {
            navigate('/dashboard');
        }
        reset();
    }, [navigate, login, reset]);

    useEffect(() => {
        document.title = "anthoStudy - Login";
    }, []);

    return (
        <>
        { 
        !loading && (
            <>
            <NavBar />
            <div className="mx-0 lg:mx-72 mt-40">
                
                <div className="w-4/5 lg:w-1/2 mx-auto p-12 bg-white border-2 border-primary rounded">
                    <h1 className='text-3xl font-bold'>Inloggen</h1>
                    <h2 className='text-xl font-bold mt-3 text-gray-500'>
                        Vul uw gegevens in om in te loggen.
                    </h2>
                    <form className='mt-10' onSubmit={handleSubmit(handleLogin)}>
                        <div className="flex flex-col">
                            <label htmlFor="email" className='text-primary text-lg font-bold'>Email</label>
                            <input type="email" id="email" className='border-2 border-primary rounded-md py-2 px-4 mt-2 focus:bg-background'
                            // form hook email
                            {...register("email", { required: true })}
                            />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="password" className='text-primary text-lg font-bold'>Wachtwoord</label>
                            <input type="password" id="password" className='border-2 border-primary rounded-md py-2 px-4 mt-2 focus:bg-background'
                            {...register("password", { required: true })}
                            />
                        </div>
                        <div className="w-full flex place-content-end">
                            <Link to="/forgottenPW">
                                <p className='text-primary text-base font-bold text-right w-fit'>Wachtwoord vergeten?</p>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="w-full bg-primary text-white font-bold py-2 px-4 rounded mt-10 border-2 border-primary hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl transition-all ">
                                Inloggen
                            </button>
                        </div>
                    </form>
                </div>
                <Link to="/register">
                    <p className=' mx-0 lg:mx-72 px-12 pt-4 underline'>
                        Nog geen account? Registreer hier!
                    </p>
                </Link>
            </div>
            </>
        )
        }
        {
            loading && (
                <div role="status">
                    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
                )
        }
        {/* error */}
        {
            error && (
                <div className="bg-red-500 text-white p-3 absolute bottom-2 right-2">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" className='stroke-white' />
                        </svg>
                         <span className="pl-2 text-white">Oeps er liep iets mis {error.message}</span>
                    </p>
                </div>
                
            )
        }
    </>

    )
}