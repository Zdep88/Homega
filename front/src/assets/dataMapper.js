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
        localStorage.setItem('token', token);
        window.location.reload();
    } catch (error) {
        console.error(error);
        toastify(error.message, true);
    }
}

async function signUp(email, password) {
    
}

export { login, signUp };