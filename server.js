// Link up express module. This gives us the ability to begin
// working with express and create our express application.
  var express = require('express');
  var stylus = require('stylus');
// Where we are in development mode or production mode.
// Node has an environment variable process.env.NODE_ENV
// string development for default environment name.
  var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// create express application.
  var app = express();

function compile(str, path) {
  return stylus(str).set('filename', path);
}

// For created app we need to configure it by calling app.configure
// pass in a callback function, where in we set up any configuration.
// for our app.
  app.configure(function(){
// set the views property set path where hold views.
  app.set('views', __dirname + '/server/views');
// default engine extension
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
// configure stylus. We pass object with two params,
// path to stylus files and compile function.
  app.use(stylus.middleware({ src: __dirname + '/public', compile: compile  }));
// Serve static content for the app from the “public” directory
  app.use(express.static(__dirname + '/public'));
});

app.get('/partials/:partialPath', function(req, res){
  res.render('partials/' + req.params.partialPath);
});

// * will match all routes
// any request handle by route index.
app.get('*', function(req, res){
// renders a view and sends the rendered HTML string to the client.
  res.render('index');
});
var port = 3030;
// We've got to tell the application to start listening to requests.
app.listen(port);
console.log('Listening on port' + port);