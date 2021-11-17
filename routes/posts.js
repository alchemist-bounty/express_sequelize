var express = require('express');
var router = express.Router();

// Task Homepage

router.get('/', function(req, res, next) {
    console.log('Task Get');
});

router.post('/', function(req, res, next) {
    const {firstName, lastName, phone} = req.body;
    console.log('Task Post');
});

router.delete('/:id', function(req, res, next) {
    const id = parseInt(req.params.id);
    console.log('Task Delete');
});

router.put('/:id', function(req, res, next) {
    const id = parseInt(req.params.id);
    const {firstName, lastName, phone} = req.body;
    console.log('Task Put');
});

module.exports = router;