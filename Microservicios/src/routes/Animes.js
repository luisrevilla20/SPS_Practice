const express = require('express');
const router = express.Router();
const Anime = require('../models/Animes');

// Get all animes
router.get('/', async (req, res) => {
	const animes = await Anime.find();

	res.json(animes);
});

// Create new anime
router.post('/new', async (req, res) => {
	const newAnime = new Anime(req.body);
	
	const savedAnime = await newAnime.save();

	res.json(savedAnime);
});

// Get specific anime
router.get('/anime/:id', async (req, res) => {
	const a = await Anime.findById({ _id: req.params.id });

	res.json(a);
});

// Delete an anime
router.delete('/delete/:id', async (req, res) => {
	const result = await Anime.findByIdAndDelete({ _id: req.params.id });

	res.json(result);
});

// Update an anime
router.patch('/update/:id', async (req, res) => {
	const a = await Anime.updateOne({_id: req.params.id}, {$set: req.body});

	res.json(a);
});

// Get random anime
router.get('/random', async (req, res) => {
	const count = await Anime.countDocuments();
	const random = Math.floor(Math.random() * count);
	const a = await Anime.findOne().skip(random);

	res.json(a);
});

// Import all data from json file
var json = require('../animedb.json');
router.post('/all', async (req, res) => {
	
	const savedAnime = await Anime.insertMany(json, function(err,result) {
		if (err) {
		 console.log(`findOne error--> ${err}`);
		} else {
		 res.json(result);
		}
	 });
});
module.exports = router;