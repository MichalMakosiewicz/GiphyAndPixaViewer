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

    return mapPixabayResponse(data);
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

    return mapPixabayResponse(data);
}

function mapPixabayResponse(resp) {
    return resp.data.hits.map((giph) => {
        return giph.previewURL;
    })
}

module.exports = {
    getPixabay,
    getPixabaySearch
}