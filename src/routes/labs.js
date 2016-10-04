var express = require('express');
var router = express.Router();

var labs = [
  {
    name: 'gcontacts-extractor',
    skills: ['python', 'google-api']
  },
  {
    name: 'LittleSpaceships',
    skills: ['java', 'android']
  }
];

router.route('/')
  .get(function(req, res) {
    res.json(labs);
  });

module.exports = router;
