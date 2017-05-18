/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/
var todosController = require('./controllers/todos_controller.js');
var bodyParser = require('body-parser');

// log
app.use(logger('dev'));

/*Views*/
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/todos', todosController);

/* HOME */
app.get('/', function(req,res) {
  // res.send('This is our Home Page');
  res.render('welcome');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
