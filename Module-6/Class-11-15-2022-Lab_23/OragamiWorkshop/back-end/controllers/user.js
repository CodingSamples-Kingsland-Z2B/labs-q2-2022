const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },
    getOne: (req, res, next) => {
        const {id} = req.params;
        console.log(id);
        models.User.findById(id)
            .then((user) => res.send(user))
            .catch(next)
    },
    post: {
        register: (req, res, next) => {
            const { username, password, rePassword } = req.body;
            if(password !== rePassword){
                return res.status(400).send({message:"passwords do not match"});    
            }
            models.User.create({ username, password })
                .then((createdUser) => res.send({id:createdUser._id}))
                .catch(next)
        },

        login: (req, res, next) => {
            //console.log(req)
            const { username, password } = req.body;
            console.log(req.body);
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) { //if the password doesnt match
                        res.status(401).send('Invalid password');
                        return;
                    }
                    //if the password does match
                    const token = utils.jwt.createToken({ id: user._id });
                    res.header(
                        'Access-Control-Allow-Headers',
                        'Origin, X-Requested-With, Content-Type, Accept'
                    )
                    .cookie(config.authCookieName, token).send({
                        id:user._id,
                        cookie:{
                            name:config.authCookieName,
                            token
                        }
                    });
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        models.User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};