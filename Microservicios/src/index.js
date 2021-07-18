const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Create express app
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Datasbase
mongoose.connect('mongodb://localhost:27017/SPSolution', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

const db = mongoose.connection;
db.once('open', () =>{
    console.log("Connection established to MongoDB database...");
});

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/animes' ,require('./routes/Animes'));

// Start the server
app.listen(app.get('port'), () => { 
    console.log(`Server on port ${app.get('port')}`);
})