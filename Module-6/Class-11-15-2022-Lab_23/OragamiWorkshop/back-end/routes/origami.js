const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.origami.get);  // http://localhost:9999/api/origami

router.post('/getUser', controllers.origami.getUser);  // http://localhost:9999/api/origami/getUser

router.post('/', auth(), controllers.origami.post);// http://localhost:9999/api/origami

router.put('/:id', auth(), controllers.origami.put); // http://localhost:9999/api/origami/:origamiID

router.delete('/:id', auth(), controllers.origami.delete); // http://localhost:9999/api/origami/:origamiID

module.exports = router;