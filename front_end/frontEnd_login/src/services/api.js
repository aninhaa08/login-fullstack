// pasta/arquivo de configuração; api.js -> arquivo de conexão com o back-end

import axios from 'axios'

//criação da conexão
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api