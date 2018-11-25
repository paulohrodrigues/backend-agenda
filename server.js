var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    cors = require('cors');
    bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./api/routes/routes'); //importing route
routes(app);
console.log(routes);
 //register the route file

 app.get('/', (req, res) => {
    res.send('hey').status(200);
 });

 //middleware added to check if user enters not found route 
 app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log(`todo list RESTful API server started on : ${port}`);