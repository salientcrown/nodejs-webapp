require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('The Passport of Mallam Ilia! by Cyripian Ekwensi');
});

app.post('/user', (req, res) => {
  const { name, age } = req.body;
  res.json({ success: true, message: `Hello, ${name}! You are ${age} years old.` });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
