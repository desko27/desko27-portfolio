var express = require('express');
var app = express();


/**
 * Global settings
 */
const API = '/api';


/**
 * Logger
 */
app.use(function(req, res, next) {
  console.log(req.path, '::', new Date(Date.now()).toLocaleString());
  next();
});


/**
 * Expose public dir
 */
app.use(express.static('public'));


/**
 * Require API routes
 */
var timeline = require('./routes/timeline');

app.use(`${API}/timeline`, timeline);


/**
 * Start server
 */
app.listen(3000, function() {
  console.log("Listening on port 3000... \n");
});
