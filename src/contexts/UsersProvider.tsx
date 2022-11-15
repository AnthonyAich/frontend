import React, { createContext, useMemo, useState, useCallback } from 'react'
import { useSession } from '../hooks/providerHooks/useSession';
import *  as  userApi from '../api/user';

export const UserContext = createContext({} as any);

export const UserProvider = ({ children }: any) => {
    const [usersSearched, setUsersSearched] = useState(null);
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [ user, setUser ] = useState('');

    // Auth ready state
    const {isAuth: authReady} = useSession();

    const getAll = useCallback(async () => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await userApi.getAllUsers();
            
            setAllUsers(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [authReady]);

    const searchUser = useCallback(async (search: string) => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await userApi.searchUser(search);
            setUsersSearched(data);
        } catch (error: any) {
            setError(error);
        } finally { 
            setLoading(false);
        }
    }, [authReady]);

    const updateUser = useCallback(async (user: any) => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await userApi.updateUser(user);
            setUser(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [authReady]);

    const userById = useCallback(async (id: number) => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await userApi.getUserById(id);
            setUser(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [authReady]);

    const addUser = useCallback(async (user: any) => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await userApi.addUser(user);
            setUser(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [authReady]);

    const deleteUser = useCallback(async (id: number) => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await userApi.deleteUser(id);
            setUser(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [authReady]);

    const value = useMemo(() => ({
        usersSearched,
        allUsers,
        loading,
        error,
        user,
        getAll,
        searchUser,
        updateUser,
        userById,
        addUser,
        deleteUser
    }), [usersSearched, allUsers, loading, error, user, getAll, searchUser, updateUser, userById, addUser, deleteUser]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}