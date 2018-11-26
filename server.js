//Variables of imports
var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    cors = require('cors');
    bodyParser = require('body-parser');
var routes = require('./api/routes/routes');

//middleware for configurations of return to routes
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Call Routes
routes(app);

//Route for page index, send message 'hey'
app.get('/', (req, res) => {
   res.send('hey').status(200);
});

//middleware added to check if user enters not found route
app.use((req, res) => {
   res.status(404).send({url: req.originalUrl + ' not found'})
});

//start serve
app.listen(port);

console.log(`RESTful API server started on : ${port}`);