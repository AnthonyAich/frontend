import { axios } from ".";

export const getMyClasses = async () => {
    return await axios.get("/classes/getMyClasses");
};

