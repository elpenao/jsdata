'use strict'; 

var router = require('express').Router();
var controller = require('./post.controller')


router.get('/', controller.index)
router.get('/:id', controller.show)
router.put('/:id', controller.update)
router.post('/', controller.create)
router.delete('/:id', controller.destroy)

module.exports = router; 