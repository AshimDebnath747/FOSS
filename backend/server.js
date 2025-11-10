// server.js or index.js
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.get('/home', (req, res) => {
    res.status(200).json({ status: 'OK', data: "Hello FOSS Club" })
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));