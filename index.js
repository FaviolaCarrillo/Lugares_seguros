const { PORT } = require('./config/config');

const express = require('express');

const server = express();

server.listen(PORT, () => {
    console.log('Server listening on port ${PORT}');
    }); 
    