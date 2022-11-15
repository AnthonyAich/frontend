import React, { createContext, useMemo, useState, useCallback } from 'react'
import { useSession } from '../hooks/providerHooks/useSession';
import *  as  classApi from '../api/class';

export const ClassContext = createContext({} as any);

export const ClassProvider = ({ children }: any) => {

    const [classes, setClasses] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Auth ready state
    const {isAuth: authReady} = useSession();

    const getAllMyClasses = useCallback(async () => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await classApi.getMyClasses();
            setClasses(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [authReady]);

    const value = useMemo(() => ({
        classes,
        loading,
        error,
        getAllMyClasses
    }), [classes, loading, error, getAllMyClasses]);

    return (
        <ClassContext.Provider value={value}>
            {children}
        </ClassContext.Provider>
    )
}


