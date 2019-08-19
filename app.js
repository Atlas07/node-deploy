const express = require('express');

const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.json({ haha: true });
});

app.listen(PORT, HOST, () => {
  console.log(`${HOST}:${PORT}`);
});
