import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
            Authorization: 'Client-ID 2f560912854e71dfe109809b45ca1055673fab98e667f8a7188306d6b4c7df2b' 
        }
});
