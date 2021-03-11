const giphy = require('./giphy');
const axios = require('axios').default;

async function getGiphyTrending() {
    const data = await axios.get(giphy.trendingGiphsUrl, {
        params: {
            api_key: giphy.secretKey,
            offset: 0,
            rating: 'G',
            lang: 'en',
        }
    }).catch((err) => {
        console.log(err);
    });
    return await mapGiphyResponse(data);
}

async function getGiphySearch(query) {
    const data = await axios.get(giphy.searchGiphsUrls, {
        params: {
            api_key: giphy.secretKey,
            q: query,
            offset: 0,
            rating: 'G',
            lang: 'en',
        }
    }).catch((err) => {
        console.log(err);
    });
    return await mapGiphyResponse(data);
}

async function mapGiphyResponse(resp) {
    return await resp.data.data.map((giph) => {
        return giph.images.fixed_height.url
    });
}

module.exports = {
    getGiphyTrending,
    getGiphySearch
}