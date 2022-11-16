const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user); // http://localhost:9999/api/user

    app.use('/api/origami', router.origami); // http://localhost:9999/api/origami

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};