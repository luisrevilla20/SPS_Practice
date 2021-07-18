const mongoose = require('mongoose');

const AnimeSchema =  new mongoose.Schema({
    sources: {
        type: Array,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    episodes: {
        type: Number,
    },
    status: {
        type: String,
    },
    animeSeason: {
        season: {type: String, required: false,},
        year: {type: Number, required: false,},
    },
    picture: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    synonyms: {
        type: Array,
    },
    relations: {
        type: Array,
    },
    tags: {
        type: Array,
        required: true,
    },

});

module.exports = mongoose.model('Anime', AnimeSchema);
