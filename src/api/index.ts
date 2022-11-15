import axiosRoot from 'axios';
import config from '../config.json';

export const axios = axiosRoot.create({
    withCredentials: true,
    baseURL: config.api_base_url,
});
