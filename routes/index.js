const express = require('express');
const router = express.Router();

const externalServices = require('../external_services/externalServices')

router.get('/giphs/trending', function (req, res, next) {
    externalServices.getService(req.query.service)
        .then((resp) => {
            console.log(resp);
            res.send(resp);
        })
        .catch((err) => {
            res.status(500).send(err)
        })
});

router.get('/giphs/search', function (req, res, next) {
    externalServices.getService(req.query.service, req.query.query)
        .then((resp) => {
            res.send(resp);
        })
        .catch((err) => {
            res.status(500).send(err)
        })
});

module.exports = router;
