const pixabay = require('./pixabay');
const axios = require('axios').default;


async function getPixabay() {
    const data = await axios.get(pixabay.url, {
        params: {
            key: pixabay.secretKey,
            per_page: 200
        }
    }).catch((err) => {
        console.log(err);
    });

    return data.data.hits;
}

async function getPixabaySearch(query) {
    const data = await axios.get(pixabay.url, {
        params: {
            key: pixabay.secretKey,
            q: query,
            per_page: 200
        }
    }).catch((err) => {
        console.log(err);
    });

    return data.data.hits;
}

module.exports = {
    getPixabay,
    getPixabaySearch
}