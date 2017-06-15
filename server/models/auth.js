const mongoose = require('mongoose');

const authTokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

const AuthModel = module.exports = mongoose.model('authToken', authTokenSchema);

module.exports.addModel = function(authToken, callback) {
    AuthModel.create(authToken, callback);
}