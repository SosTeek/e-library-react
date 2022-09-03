import axios from 'axios';
import { getCurrentUser } from './utils';

const BASE_URL = process.env.REACT_APP_LOCAL_URL;

const currentUser = getCurrentUser();
let token = null;
if(currentUser){
    token = currentUser.token
}

export const publicApi = axios.create({
    baseURL: BASE_URL,
});

export const authAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`,
    }
})