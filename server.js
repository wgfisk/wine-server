// taken from http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/

var express = require('express'),
    wine = require('./wines');

var app = express();

//app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
//app.use(express.bodyParser());

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

app.listen(3000);
console.log('Listening on port 3000...');