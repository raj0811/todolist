const port = 8000;
// const env=require('./config/enviroment')
// require('dotenv').config()
const express=require('express');     
const session = require('express-session');
// const cookieParser = require('cookie-parser');

const flash = require('connect-flash');
const app= express();
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('assets'));
// app.use(express.static(env.asset_path));

const customMware = require('./config/middleware');

var bodyParser = require('body-parser')
// setup view engin
app.set('view engine', 'ejs');
app.set('views', './views');



app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}));

app.use(expressLayouts);



app.use(session({ 
    name: 'issueTracker',
    secret: 'your-secret-key',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
}));


app.use(flash());
app.use(customMware.setFlash)

app.use('/', require('./routes'));

// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);
app.listen(port, function(err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port} `);
    console.log(process.env.raj);
})