import axios from 'axios';

const KEY = 'AIzaSyDD8Jj0TPi_Vos1paL6lsaZXn8GBbGJE-s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
}) 