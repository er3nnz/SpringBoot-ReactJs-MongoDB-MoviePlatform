import axios from 'axios';

export default axios.create({
    baseURL:'https://c22b-2a02-4e0-2d94-218f-502-1fa5-1f4f-40ef.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});