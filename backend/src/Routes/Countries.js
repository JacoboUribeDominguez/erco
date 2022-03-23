const express = require('express');
const router = express.Router();
const connection = require('../Bd/mysql')

router.get('/', (req, res) => {
    connection.query('SELECT id_place, id_country, name_place FROM place WHERE id_country IS NOT null', function (error, results, fields) {
        if(error) throw error;
        res.json(results);
    });
})

module.exports = router;