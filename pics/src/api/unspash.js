import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 605e06521aaa13096ddb78f459d2f52d63bbd722f628bd39d001d750d332df6a'
    }
})

