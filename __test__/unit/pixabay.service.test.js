const pixabayService = require('../../external_services/pixabay/pixabay.service');
const pixabay = require('../../external_services/pixabay/pixabay');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');


describe('Pixabay service tests', () => {
    it('Calls pixabay api and map data', async () => {
        const mock = new MockAdapter(axios);
        const data = {
            hits: [
                {
                    previewURL: 'test1'
                },
                {
                    previewURL: 'test2'
                }
            ]
        }

        mock.onGet(pixabay.url).reply(200, data);

        const giphsUrls = await pixabayService.getPixabay();
        expect(giphsUrls).toStrictEqual(['test1', 'test2'])
    })
})  