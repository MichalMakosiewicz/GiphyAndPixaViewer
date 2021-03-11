const giphyService = require('../external_services/giphy/giphy.service');
const pixabayService = require('../external_services/pixabay/pixabay.service');

async function getService(serviceName, query = '') {
    if (serviceName === 'giphy' && !query) {
        return await giphyService.getGiphyTrending();
    } else if (serviceName === 'giphy' && query) {
        return await giphyService.getGiphySearch(query);
    } else if (serviceName === 'pixabay' && !query) {
        return await pixabayService.getPixabay();
    } else if (serviceName === 'pixabay' && query) {
        return await pixabayService.getPixabaySearch(query);
    } else {
        throw Error('Cannot find service name');
    }
}

module.exports = { getService };