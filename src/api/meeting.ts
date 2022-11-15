import { axios } from ".";

export const getMyMeetings = async () => {
    return await axios.get("/meeting/getMyMeetings");
};

export const getMeeting = async (id: number) => {
    return await axios.get(`/meeting/getMeetingById/${id}`);
};

export function getAllMeetings(): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error('Function not implemented.');
}



export function createMeeting(meeting: any): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error('Function not implemented.');
}

export function updateMeeting(meeting: any): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error('Function not implemented.');
}

export function deleteMeeting(id: number): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error('Function not implemented.');
}

