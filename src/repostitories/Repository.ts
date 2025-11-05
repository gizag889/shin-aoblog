import axios from "axios";



const endpoint = process.env.NEXT_PUBLIC_WP_ENDPOINT;
if (!endpoint) {
    throw new Error("Environment variable NEXT_PUBLIC_WP_ENDPOINT is not set or empty.");
}

const repository = axios.create({
    baseURL: endpoint,
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