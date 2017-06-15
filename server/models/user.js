const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});

const UserModel = module.exports = mongoose.model('User', UserSchema);

module.exports.getUsers = function(callback, limit) {
    UserModel.find(callback).limit(limit);
}

module.exports.addUser = function(user, callback) {
    UserModel.create(user, callback);
}