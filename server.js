'use strict';

const { join } = require('path');
const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('app'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'app/index.html'));
})

app.listen(port, function(error) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(`Server is listening on ${port}`)
})