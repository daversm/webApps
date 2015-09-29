/* *****************
 * Require Imports *
 * *****************/

var express = require('express');
var path = require('path');

/* ***********************
 * Initialize Middleware *
 * **********************/

// Instantiate the express object

var useragent = require('express-useragent');
var app = express();


app.use(useragent.express());

app.get('/', function(req, res){
  var browserName = req.useragent["browser"];
  var browserVersion = req.useragent["version"]

  app.use(express.static(__dirname));

  if (browserName == 'IE' && browserVersion <= 9)
    res.sendFile('nosupport.html', { root:__dirname});
  else if (browserName == 'Firefox' && browserVersion <= 24)
    res.sendFile('nosupport.html', { root:__dirname});
  else if (browserName == 'Chrome' && browserVersion <= 29)
    res.sendFile('nosupport.html', { root:__dirname});
  else if (browserName == 'Canary' && browserVersion <= 32)
    res.sendFile('nosupport.html', { root:__dirname});
  else if (browserName == 'Safari' && browserVersion <= 5)
    res.sendFile('nosupport.html', { root:__dirname});
  else if (browserName == 'Opera' && browserVersion <= 16)
    res.sendFile('nosupport.html', { root:__dirname});
  else
   res.sendFile('index.html', { root:__dirname});
});


// index.html

/* ******************
 * Start the server *
 * ******************/

var port = process.env.PORT || 8080;

var server = app.listen(port, function() {
  console.log('Site is up on:', port);
});
