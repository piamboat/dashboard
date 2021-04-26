import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.openweathermap.org',
    params: {
        appid: '5aaa580024979ac4993bf726ebd7d799'
    }
})