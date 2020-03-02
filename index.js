const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');

const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
  await mongoose.connect('mongodb://localhost/musicApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use('/artists', artists);
  app.use('/albums', albums);
  app.use('/tracks', tracks);

  app.listen(config.port, () => {
    console.log('Please try', config.port)
  })
};

run().catch(e => {
  console.log(e);
});