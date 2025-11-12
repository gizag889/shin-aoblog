import axios from "axios";




const repository = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_WP_ENDPOINT,
    baseURL: process.env.WP_ENDPOINT,

    headers: {
        'Content-Type': 'application/json'
    }
})

const Repository = (query: string, { variables }: { variables?: Record<string, unknown> } = {}) => {
    const body = {
        query,
        variables
    }
    return {
        getWp() {
            return repository.post('/', body)
        }
    }
}

export default Repository