import React, {createContext, useState, useCallback, useMemo, useEffect} from "react";
import config from "../config.json";
import { Buffer } from "buffer";
import * as userApi from "../api/user";
import * as API from "../api";

// Context
export const AuthContext = createContext({} as any);


export const AuthProvider = ({children}: any) => {
    // States
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(Object);
    const [ready, setReady] = useState(false);

    //login function
    const login = useCallback(async (email: string, password: string) => {
        try {
            setLoading(true);
            setError('');
            const {data} = await userApi.login(email, password);
            setUser(data);
            
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }

    }, []);

    // set session
    const setSession = useCallback(async () => {
        try {
                const user: object = await userApi.getMyself();                
                setUser(user);
                setReady( true );
            }
            catch (error: any) {
                setError(error);
            }
    }, []);

    // logout function
    const logout = useCallback(async () => {
        try {
            setLoading(true);
            setError('');
            setUser(null);
            setReady(false);
            const data = await userApi.logout();
            console.log(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        setSession();
    }, [setSession]);

    // Provider values
    const value = useMemo(() => {
        return {
            user, setUser, login, logout, loading, error, ready
        }
    }, [user, setUser, login, logout, loading, error, ready]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};


