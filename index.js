const express = require('express');
const { PORT } = require('./config/config');

const server = express();

server.listen(PORT, () => {
    console.log('Server listening on port ${PORT}');
    }); 
    