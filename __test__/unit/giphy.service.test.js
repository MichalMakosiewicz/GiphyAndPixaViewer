const giphyService = require('../../external_services/giphy/giphy.service');
const giphy = require('../../external_services/giphy/giphy');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');


describe('Giphy service tests', () => {
    it('Calls giphy api and map data', async () => {
        const mock = new MockAdapter(axios);
        const data = {
            data: [
                {
                    images: {
                        fixed_height: {
                            url: 'test1'
                        }
                    }
                },
                {
                    images: {
                        fixed_height: {
                            url: 'test2'
                        }
                    }
                }
            ]
        }

        mock.onGet(giphy.trendingGiphsUrl).reply(200, data);

        const giphsUrls = await giphyService.getGiphyTrending();
        expect(giphsUrls).toStrictEqual(['test1', 'test2'])
    })
})  