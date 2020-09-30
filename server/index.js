const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('App is running');
});
const port = 5000;
app.listen(process.env.PORT || port);
