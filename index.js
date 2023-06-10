// Importing the required modules, libraries and frameworks
const express = require('express');
const bodyParser = require('body-parser');  // This is used for url encoding the post request made via signup form
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

// Using Mongoose ODM to connect with MongoDB 
main().catch(err => console.log(err));
    async function main() {
      await mongoose.connect('mongodb+srv://msheshant1997:Sheshant123@cluster0.knr5rcl.mongodb.net/?retryWrites=true&w=majority');
}

// The sign up form data should be encoded in the url using the body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Setting 'Assets' folder as directory for static files (CSS, JS and Images)
app.use(express.static('./Assets'));

// Setting up the EJS view engine 
app.set('view engine', 'ejs');
app.set('views', './Views'); // The http requests will be routed to the 'Views' directory wherein all the pages and subpages are stored

// Extract the styles and scripts from subpages into the layout page
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Using express ejs layouts library
// This must be executed before the routes so that before rendering pages from the views, a layout is predefined for all of them
app.use(expressLayouts);

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