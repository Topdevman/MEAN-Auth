'use strict';

const User = require('../models/user');

module.exports.register = function(req, res) {
    User.addUser(req.body, function(err, user) {
        if(err) {
            throw err;
        }
        res.status(201).json(user);
    });
}