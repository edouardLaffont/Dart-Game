import axios from 'axios'

const baseUrl: string = 'http://localhost:3000'

const API = axios.create({
    baseURL: baseUrl
})

export default API
