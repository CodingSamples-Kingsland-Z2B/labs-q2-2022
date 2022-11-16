const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get);  // http://localhost:9999/api/user

router.get('/:id', controllers.user.getOne);  // http://localhost:9999/api/user/:userID

router.post('/register', controllers.user.post.register);  // http://localhost:9999/api/user/register

router.post('/login', controllers.user.post.login);  // http://localhost:9999/api/user/login

router.post('/logout', controllers.user.post.logout);  // http://localhost:9999/api/user/logout

router.put('/:id', controllers.user.put);  // http://localhost:9999/api/user/:userID - put request

router.delete('/:id', controllers.user.delete);// http://localhost:9999/api/user/:userID - delete request

module.exports = router;