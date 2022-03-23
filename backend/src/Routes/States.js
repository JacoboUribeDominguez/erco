const express = require('express');
const router = express.Router();
const connection = require('../Bd/mysql')

router.get('/:id_country', (req, res) => {
    connection.query(`SELECT id_place, id_state, name_place FROM place WHERE id_state IS NOT null AND country_connection = ${req.params.id_country}`, function (error, results, fields) {
        if(error) throw error;
        res.json(results);
    });
})

module.exports = router;