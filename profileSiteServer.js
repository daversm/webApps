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

  if (browserName == 'IE' && browserVersion <= 10)
    res.sendFile('nosupport.html', { root:__dirname});
  else if (browserName == 'Firefox' && browserVersion <= 27)
    res.sendFile('nosupport.html', { root:__dirname});
  else if (browserName == 'Chrome' && browserVersion <= 21)
    res.sendFile('nosupport.html', { root:__dirname});
  else if (browserName == 'Canary' && browserVersion <= 32)
    res.sendFile('nosupport.html', { root:__dirname});
  else if (browserName == 'Safari' && browserVersion <= 6)
    res.sendFile('nosupport.html', { root:__dirname});
  else if (browserName == 'Opera' && browserVersion <= 17)
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
