import axios from 'axios';
import { toastify } from './toaster';

async function login(email, password) {
    try {
        const response = await axios({
            method: 'post',
            url: '/api/login',
            data: {
                email,
                password
            },
        });
        if (response.statusText !== 'OK') {
            toastify(response.data.error, true);
        }
        const token = response.data.token;
        toastify(response.data.message);
        localStorage.setItem('token', token);
        return true;
    } catch (error) {
        console.error(error);
        toastify(error.message, true);
        return false;
    }
}

async function signUp(email, password) {
    toastify('Not implemented yet', 'error');
}

export { login, signUp };