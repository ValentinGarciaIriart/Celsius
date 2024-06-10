const express = require('express');
const converter = require('./converter');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/convert', (req, res) => {
    const { celsius } = req.body;
    const fahrenheit = converter.convertToFarhenheit(celsius);
    const color = converter.getRandomColor();
    res.send({ fahrenheit, color });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
