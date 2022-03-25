const mongoose = require('mongoose');

const Para = mongoose.model('para', {
    "paragraph": {
        type: String,
        required: true,
        trim: true,
    }
});

module.exports = Para;