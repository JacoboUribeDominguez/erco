const express = require('express');
const router = express.Router();
const connection = require('../Bd/mysql')

router.get('/poblation/:id_city', (req, res) => {
    connection.query(`SELECT poblation FROM place WHERE id_city = ${req.params.id_city}`, function (error, results, fields) {
        if(error) throw error;
        res.json(results);
    });
})

router.get('/:id_state', (req, res) => {
    connection.query(`SELECT id_place, id_city, name_place FROM place WHERE id_city IS NOT null AND state_connection = ${req.params.id_state}`, function (error, results, fields) {
        if(error) throw error;
        res.json(results);
    });
})

module.exports = router;