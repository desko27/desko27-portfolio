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
var work = require('./routes/work');
var labs = require('./routes/labs');

app.use(`${API}/timeline`, timeline);
app.use(`${API}/work`, work);
app.use(`${API}/labs`, labs);


/**
 * Start server
 */
app.listen(3000, function() {
  console.log("Listening on port 3000... \n");
});
