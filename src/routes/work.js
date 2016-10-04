var express = require('express');
var router = express.Router();

var work = [
  {
    name: "bcn3dtechnologies.com",
    skills: ['html5', 'css3', 'php', 'wordpress', 'javascript', 'jquery'],
  },
  {
    name: "fundaciocim.org",
    skills: ['html5', 'css3', 'php', 'wordpress', 'javascript', 'jquery'],
  }
];

router.route('/')
  .get(function(req, res) {
    res.json(work);
  });

module.exports = router;
