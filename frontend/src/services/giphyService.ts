import axios from "axios";

export const getGiphy = async () => {
    const url = "http://localhost:3000/giphy/trending";
    const result = await axios(url);
    return result.data
}

export const getGiphySearch = async (query: string) => {
    const url = "http://localhost:3000/giphy/search";
    const result = await axios(url, {
        params: {
            query: query
        }
    });
    return result.data
}