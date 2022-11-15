import React, { createContext, useMemo, useState, useCallback } from 'react'
import { useSession } from '../hooks/providerHooks/useSession';
import *  as  meetingApi from '../api/meeting';

export const MeetingContext = createContext({} as any);

export const MeetingProvider = ({ children }: any) => {
    const [meetings, setMeetings] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [ meeting, setMeeting ] = useState('');

    // Auth ready state
    const {isAuth: authReady} = useSession();

    const getAll = useCallback(async () => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await meetingApi.getAllMeetings();
            
            setMeetings(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [authReady]);

    const getMeeting = useCallback(async (id: number) => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await meetingApi.getMeeting(id);
            setMeeting(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    , [authReady]);

    const createMeeting = useCallback(async (meeting: any) => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await meetingApi.createMeeting(meeting);
            setMeeting(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    , [authReady]);

    const updateMeeting = useCallback(async (meeting: any) => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await meetingApi.updateMeeting(meeting);
            setMeeting(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    , [authReady]);

    const deleteMeeting = useCallback(async (id: number) => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await meetingApi.deleteMeeting(id);
            setMeeting(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    , [authReady]);

    const getAllMyMeetings = useCallback(async () => {
        try {
            if(!authReady) return;
            setLoading(true);
            setError('');
            const { data } = await meetingApi.getMyMeetings();
            setMeetings(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    } , [authReady]);

    const value = useMemo(() => ({
        meetings,
        loading,
        error,
        meeting,
        getAll,
        getMeeting,
        createMeeting,
        updateMeeting,
        deleteMeeting,
        getAllMyMeetings
    }), [meetings, loading, error, meeting, getAll, getMeeting, createMeeting, updateMeeting, deleteMeeting, getAllMyMeetings]);

    return (
        <MeetingContext.Provider value={value}>
            {children}
        </MeetingContext.Provider>
    )
}
