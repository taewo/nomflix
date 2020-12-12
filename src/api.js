import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key:'90b24eef4408e90c61d1bdf172f0a242',
    language: 'en-US'
  }
})




export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular')
}

export const tvApi = {
  topRated: () => api.get('movie/top_rated'),
  popular: () => api.get('movie/popular'),
  airingToday: () => api.get('movie/airing_today')
}