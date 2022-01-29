const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('test');
});

app.get('/api', (req, res) => {
  res.send('test');
});

app.listen(3000, () => {
  console.log('server listening to 3000');
})