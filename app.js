const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');







const app = express();


// Port number
const port = process.env.PORT || 8080;


//set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// Body Parser Middleware
app.use(bodyParser.json());









// Start Server
app.listen(port, () => {
    console.log('Server Started on Port ' + port);
})
