const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');
var path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const mockAPIResponse = require('./mockAPI.js');

const apiKey = process.env.API_KEY;
// Define the Express app
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse request bodies as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// Start the server
const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.error("Server failed to start:", error);
  } else {
    console.log(`Server listening on port ${PORT}!`);
  }
});

// Define routes

// GET route for the homepage
app.get('/', function(req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'));
});

// POST route for the sentiment analysis API
app.post('/api', (req, res) => {
  const { articleUrl } = req.body;
  const apiData = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${articleUrl}&lang=en`;

  axios(apiData)
    .then(response => {
      const {
        agreement,
        score_tag,
        confidence,
        irony
      } = response.data;

      res.send({
        agreement,
        score_tag,
        confidence,
        irony
      });
    })
    .catch(error => {
      console.log(error.message);
    });
});

// Test route
app.get('/test', function(req, res) {
  res.send(mockAPIResponse);
});

module.exports = { app };
