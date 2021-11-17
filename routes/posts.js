var express = require('express');
var router = express.Router();
const postsController = require('../controllers/posts');
const Post = require('../models/posts');


// Posts Homepage

router.get('/', function(req, res, next) {
    
    return Post.findAll()
        .then((posts) => res.send(posts))
        .catch((err) => {
            console.log('There was an error while retrieving', JSON.stringify(err));
            return res.send(err);
        });
        
});

router.post('/', function(req, res, next) {
    const {firstName, lastName, phone} = req.body;
    
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