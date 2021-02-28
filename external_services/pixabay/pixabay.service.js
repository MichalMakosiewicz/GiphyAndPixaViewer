const pixabay = require('./pixabay');
const axios = require('axios').default;


async function getPixabay() {
    const data = await axios.get(pixabay.url, {
        params: {
            key: pixabay.secretKey
        }
    }).catch((err) => {
        console.log(err);
    });

    return data.data.hits;
}

module.exports = {
    getPixabay
}