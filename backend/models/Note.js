const mongooes = require('mongoose');

const noteSchema = new Schema({
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

module.exports = User = mongoose.model('note', noteSchema);