import axios from 'axios';

const apiLine = axios.create({
    baseURL: 'https://private-afe609-testefront.apiary-mock.com/time-data',
})

export default apiLine;