const mongooes = require('mongoose');
const { Schema } = mongooes;


const noteSchema = new Schema({
    user: {
        type: mongooes.Schema.Types.ObjectId, //Act as an foreign key
        ref: 'user'
    },
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },

});

const Note =  mongooes.model('Note', noteSchema);

module.exports = Note;