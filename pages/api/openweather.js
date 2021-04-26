import axios from 'axios'

export default axios.create({
    baseURL: 'http://api.openweathermap.org',
    params: {
        appid: 'ed7ddbf6484f7a9102f78883f5e91458'
    }
});