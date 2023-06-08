// Importing the required modules, libraries and frameworks
const express = require('express');
const app = express();
 
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