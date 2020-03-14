const express = require('express');
const path = require('path');
const CONFIG = require('@yarn-monorepo/config');

const app = express();

// TODO: Write API

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.listen(CONFIG.PORT, () => console.log(`Listening on ${CONFIG.PORT}`));
