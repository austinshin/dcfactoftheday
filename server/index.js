const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/', (req, res) => {
  console.log('hello world');
  if (err) {
    res.sendStatus(500);
  } else {
    res.sendStatus(200);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
