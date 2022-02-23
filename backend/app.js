const express = require('express');
const cors = require('cors');
const version = require('./package.json');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/info', (req, res) => {
  res.status(200).json({
    success: true,
    name: 'Test API',
    author: 'Mrt',
    type: 'info',
    url: 'http://localhost:4000/info',
    version: version.version,
  });
});

app.get('/', (req, res) => {
  res.status(200).send(
    '<h1>Hello world!!!</h1>'
  );
});

module.exports = app;