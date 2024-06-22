import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://rocketmovies-api-1h9u.onrender.com'
})
