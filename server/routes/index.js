const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/newpro');

module.exports = (router) => {
    router.post('/register', userController.register);
}