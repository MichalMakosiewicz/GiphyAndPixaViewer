import axios from "axios";

export const getPixabay = async () => {
    const url = "http://localhost:3000/pixabay";
    const result = await axios(url);    
    
    return result.data
}

export const getPixabaySearch = async (query: string) => {
    const url = "http://localhost:3000/pixabay";
    const result = await axios(url, {
        params: {
            query: query
        }
    });    
    
    return result.data
}