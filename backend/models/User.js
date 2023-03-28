const mongooes = require('mongoose');
const { Schema } = mongooes;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});

const User = mongooes.model('user', userSchema);

module.exports  = User