const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.use(cors());

const getMany = () => fetch('https://next.json-generator.com/api/json/get/EkzBIUWNL');

app.get('/product', async (req, res) => {
    try {
        const result = await getMany();
        const data = await result.json();

        return res.json(data);
    }
    catch(e) {
        console.log('Oops, something went wrong: ', e);
    }
});

app.get('/product-detail/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await getMany();
        const data = await result.json();
        const singleItem = data.filter(item => (id === item._id));

        return singleItem.length > 0 ? res.send(singleItem) : res.send('No result, try again!');
    }
    catch(e) {
        console.log('Oops, something went wrong: ', e);
    }
});

module.exports = app;
