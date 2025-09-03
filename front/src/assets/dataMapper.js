import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

async function login(email, password) {
    try {
        const response = await axios({
            method: 'post',
            url: '/login',
            data: {
                email,
                password
            },
        });
        console.log(response);
        if (response.statusText === 'OK') {
            localStorage.setItem('token', response.data.token);
            window.location.href = '/';
        } else {
            console.log('Échec de la connexion');
        }
    } catch (error) {
        console.error(error);
    }
}

export { login };