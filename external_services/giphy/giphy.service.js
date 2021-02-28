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
    })
        .catch((err) => {
            console.log(err);
        });
    return data.data.data;
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
    })
        .catch((err) => {
            console.log(err);
        });
    return data.data.data;
}

module.exports = {
    getGiphyTrending,
    getGiphySearch
}