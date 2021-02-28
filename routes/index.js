const express = require('express');
const router = express.Router();

const giphyService = require('../external_services/giphy/giphy.service');
const pixabayService = require('../external_services/pixabay/pixabay.service');

router.get('/giphy/trending', function (req, res, next) {
  giphyService.getGiphyTrending()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.status(500).send(err)
    })
});

router.get('/giphy/search', function (req, res, next) {
  const query = req.query.query
  giphyService.getGiphySearch(query)
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.status(500).send(err)
    })
});

router.get('/pixabay/trending', function (req, res, next) {
  pixabayService.getPixabay()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    })
});

router.get('/pixabay/search', function (req, res, next) {
  const query = req.query.query
  pixabayService.getPixabaySearch(query)
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    })
});

module.exports = router;
