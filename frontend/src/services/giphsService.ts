import axios from "axios";

export const getGiphs = async (service: string) => {
    const url = "http://localhost:3000/giphs/trending";
    const result = await axios(url, {
        params: {
            service: service
        }
    });
    return result.data
}

export const getGiphsSearch = async (service: string, query: string) => {
    const url = "http://localhost:3000/giphs/search";
    const result = await axios(url, {
        params: {
            service: service,
            query: query
        }
    });
    return result.data
}