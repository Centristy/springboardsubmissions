const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// Sample data (shopping list)
let items = require('./fakeDb.js')

// Middleware
app.use(bodyParser.json());

// GET all items in shopping list
app.get('/items', (req, res) => {
    res.json(items);
});

// GET a specific item by name
app.get('/items/:name', (req, res) => {
    const name = req.params.name;
    const item = items.find(item => item.name === name);
    if (!item) {
        res.status(404).send('Item not found');
    } else {
        res.json(item);
    }
});

// POST a new item to shopping list
app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).send( {"Added": newItem});
});

// PUT update an item in shopping list

app.patch('/items/:name', (req, res) => {
    const name = req.params.name;
    const updatedItem = req.body;
    const index = items.findIndex(item => item.name === name);
    if (index === -1) {
        res.status(404).send('Item not found');
    } else {
        items[index] = { ...items[index], ...updatedItem };
        res.json({"Updated": items[index]});
    }
});

// DELETE an item from shopping list

app.delete('/items/:name', (req, res) => {
    const name = req.params.name;
    const index = items.findIndex(item => item.name === name);
    if (index === -1) {
        res.status(404).send('Item not found');
    } else {
        res.status(204).send('Deleted');
        items.splice(index, 1);
        
    }
});


// Start the server
app.listen(3000, function () {
console.log("Listening on 3000");
});


module.exports = app

