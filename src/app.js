const express = require('express');
const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200).send();
});

app.get('/', (req, res) => {
  res.status(200).send(
    '<h1>Hello world!!!</h1>'
  );
});

module.exports = app;