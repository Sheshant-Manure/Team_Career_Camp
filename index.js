// Importing the required modules, libraries and frameworks
const express = require('express');
const app = express();

// Setting 'Assets' folder as directory for static files (CSS, JS and Images)
app.use(express.static('./Assets'));

// Setting up the EJS view engine 
app.set('view engine', 'ejs');
app.set('views', './Views'); // The http requests will be routed to the 'Views' directory wherein all the pages and subpages are stored

// Setting Routes folder for routing all the urls requested by the client (browser)
app.use('/', require('./Routes/index'));

// Defining the localhost url and port #
const url = '127.0.0.1';
const port = 8000;

// Setting up the express server at localhost(127.0.0.1 and port:8000)
app.listen(port, url, (error)=>{
    if(error){
        console.log(error);
    }
    console.log(`Server is running at ${url}:${port}`);
});