import axios from 'axios'

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID acc8dc32f27ff1c82a9f4fd9d4ff21a4b56b93a547df769d3ed10bcdcb2fba24'
  }
})